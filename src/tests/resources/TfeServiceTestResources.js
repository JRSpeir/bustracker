const liveTimesResponse = [
  {
    routeName: "1",
    departures: [
      {
        routeName: "1",
        departureTime: "2023-07-22T01:01:00+01:00",
      },
      {
        routeName: "1",
        departureTime: "2023-07-22T01:03:00+01:00",
      },
    ],
  },
  {
    routeName: "35",
    departures: [
      {
        routeName: "35",
        departureTime: "2023-07-22T01:02:00+01:00",
      },
      {
        routeName: "35",
        departureTime: "2023-07-22T01:04:00+01:00",
      },
    ],
  },
];

const stopsResponse = {
  last_updated: 1690119337,
  stops: [
    {
      stop_id: 36234964,
      atco_code: "6200200010",
      name: "Cockburn Crescent",
      identifier: null,
      locality: "Balerno",
      orientation: 329,
      direction: "W",
      latitude: 55.876591,
      longitude: -3.337469,
      service_type: "bus",
      atco_latitude: 55.876591,
      atco_longitude: -3.337469,
      destinations: ["Balerno", "Haymarket", "Wallyford", "Whitecraig"],
      services: ["44", "N44"],
    },
    {
      stop_id: 36234954,
      atco_code: "6200200020",
      name: "Marchbank Drive",
      identifier: null,
      locality: "Balerno",
      orientation: 341,
      direction: "N",
      latitude: 55.879917,
      longitude: -3.339022,
      service_type: "bus",
      atco_latitude: 55.879917,
      atco_longitude: -3.339022,
      destinations: ["Haymarket", "Wallyford", "Whitecraig"],
      services: ["N44", "44"],
    },
  ],
};

export { liveTimesResponse, stopsResponse};
