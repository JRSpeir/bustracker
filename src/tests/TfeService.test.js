import { getBusTimes } from "../TfeService";
import fetchMock from "jest-fetch-mock";
import { apiResponse } from "./resources/TfeServiceTestResources";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

it("Service should return expected object", async () => {
  fetch.mockResponseOnce(
    JSON.stringify([
      {
        routeName: "1",
        departures: [
          { routeName: "1", departureTime: "2023-07-22T01:01:00+01:00" },
        ],
      },
    ])
  );
  jest.spyOn(global.Date, "now").mockImplementationOnce(() => 1689980400000);

  const result = await getBusTimes();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(result[0].route).toBe("1");
  expect(result[0].time).toBe(1);
});

it("When time is 0 should be arrived", async () => {
  fetch.mockResponseOnce(
    JSON.stringify([
      {
        routeName: "1",
        departures: [
          { routeName: "1", departureTime: "2023-07-22T01:00:00+01:00" },
        ],
      },
    ])
  );
  jest.spyOn(global.Date, "now").mockImplementationOnce(() => 1689980400000);

  const result = await getBusTimes();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(result[0].route).toBe("1");
  expect(result[0].time).toBe("Arrived");
});

it("When Multiple Services Should parse correctly", async () => {
  fetch.mockResponseOnce(JSON.stringify(apiResponse));
  jest.spyOn(global.Date, "now").mockReturnValue(1689980400000);

  const result = await getBusTimes();

  expect(fetch).toHaveBeenCalledTimes(1);
  const expectedResult = [
    { route: "1", time: 1 },
    { route: "35", time: 2 },
    { route: "1", time: 3 },
    { route: "35", time: 4 },
  ];

  expect(result).toStrictEqual(expectedResult);
});
