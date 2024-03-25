import nock from "nock";
import { getCurrentWeather } from "./get-current-weather";

jest.mock("next/headers", () => ({
  headers: () => ({
    get: (key: string) => {
      if (key === "x-forwarded-for") {
        return "123.123.123.123";
      }
    },
  }),
}));

describe("getCurrentWeather", () => {
  it("fetches weather data successfully", async () => {
    nock("http://api.weatherstack.com")
      .get("/current")
      .query(true)
      .reply(200, {
        request: {
          type: "City",
          query: "New York, United States of America",
          language: "en",
          unit: "m",
        },
        location: {
          name: "New York",
          country: "United States of America",
          region: "New York",
          lat: "40.714",
          lon: "-74.006",
          timezone_id: "America/New_York",
          localtime: "2021-09-23 07:27",
          utc_offset: "-4.0",
        },
        current: {
          temperature: 20,
          weather_descriptions: ["Sunny"],
          wind_speed: 7,
          wind_degree: 20,
          wind_dir: "NNE",
          pressure: 1012,
          precip: 0.1,
          humidity: 82,
          cloudcover: 0,
          feelslike: 19,
          uv_index: 5,
          visibility: 16,
          is_day: "yes",
        },
      });

    const data = await getCurrentWeather();

    expect(data).toHaveProperty("request");
    expect(data).toHaveProperty("location");
    expect(data).toHaveProperty("current");
  });
});
