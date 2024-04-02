import {
  currentWeatherResponse,
  currentWeatherResponseFahrenheit,
  currentWeatherResponseKelvin,
} from "../mock-data/current-weather";
import { CurrentWeatherData } from "./types";
import { UnitParamerter } from "./unit-parameter";

export const getCurrentWeatherMock = async ({
  unit,
}: {
  unit?: UnitParamerter;
} = {}): Promise<CurrentWeatherData> => {
  const unitToReponseMap = {
    m: currentWeatherResponse,
    f: currentWeatherResponseFahrenheit,
    s: currentWeatherResponseKelvin,
  };

  const currentWeather = unitToReponseMap[unit || "m"];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(currentWeather as CurrentWeatherData);
    }, 1000);
  });
};
