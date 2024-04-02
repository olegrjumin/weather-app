import { currentPhotoResponse } from "../mock-data/current-photo";
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

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(currentWeather as CurrentWeatherData);
    }, 1000);
  });
};

export const getCurrentLocationPhotoMock = async (): Promise<
  typeof currentPhotoResponse
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(currentPhotoResponse);
    }, 1000);
  });
};
