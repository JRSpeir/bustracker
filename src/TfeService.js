export default async function getBusTimes(){
    try {
        const responseJson = await (await  fetch('https://tfe-opendata.com/api/v1/live_bus_times/36232893', {
          method: "GET",
          headers: {
            "Authorization": process.env.TFE_KEY
          }
        })
        .then(t => t.json())
        .catch(error => console.log(error)))
        
        //setData(extractRows(responseJson));
        return extractRows(responseJson);
  
    } catch (err) {
        console.log(err.message)
    }
  }
  
  function extractRows(responseJson)
  {
    return responseJson
    .map(res => res.departures)
    .map(departures => getRowsFromDepartures(departures))
    .flat(1)
    .sort((a, b) => a.time - b.time);
  }
  
  function getRowsFromDepartures(departures)
  {
    return departures.map(t => {
        const timeNow = new Date(Date.now());
        const depart = new Date(Date.parse(t.departureTime));
      
        const diff = Math.round(((depart - timeNow)/1000/60)-60);

        const display = diff === 0 ? "Arrived" : diff;
    
        const q = {"route": t.routeName, "time": display};
        return q;
    });
  }