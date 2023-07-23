export async function getBusTimes() {
  try {
    const responseJson = await sendLiveTimesRequest()
      .then((res) => res.json())
      .catch((error) => console.log(error));

    return extractRows(responseJson);
  } catch (err) {
    console.log(err.message);
  }
}

async function sendLiveTimesRequest() {
  return await fetch(
    "https://tfe-opendata.com/api/v1/live_bus_times/36232893",
    {
      method: "GET",
      headers: {
        Authorization: process.env.TFE_KEY,
      },
    }
  );
}

function extractRows(responseJson) {
  if (responseJson === null) {
    return [
      {
        route: "No more services scheduled today, please check back tomorrow",
        time: "",
      },
    ];
  }
  return responseJson
    .map((res) => res.departures)
    .map((departures) => getRowsFromDepartures(departures))
    .flat(1)
    .sort((a, b) => a.time - b.time);
}

function getRowsFromDepartures(departures) {
  return departures.map((t) => {
    const timeNow = new Date(Date.now());
    const depart = new Date(Date.parse(t.departureTime));

    const diff = Math.round((depart - timeNow) / 1000 / 60 - 60);

    const display = diff === 0 ? "Arrived" : diff;

    const rowData = { route: t.routeName, time: display };
    return rowData;
  });
}

export async function getStops() {
  try {
    const responseJson = await sendStopsRequest()
      .then((res) => res.json())
      .catch((error) => console.log(error));

    return extracStopRows(responseJson);
  } catch (err) {
    console.log(err.message);
  }
}

async function sendStopsRequest() {
  return await fetch("https://tfe-opendata.com/api/v1/stops", {
    method: "GET",
    headers: {
      Authorization: process.env.TFE_KEY,
    },
  });
}

function extracStopRows(responseJson) {
  return responseJson?.stops?.map((stop) => ({
    stop_id: stop.stop_id,
    stop_name: stop.name,
    destinations: stop.destinations,
    services: stop.services,
  }));
}
