import { BASE_URL } from "../lib/constants";
import { CurrentWeatherData } from "../lib/types";

export const getCurrentWeather = async (): Promise<CurrentWeatherData> => {
  try {
    console.log(BASE_URL);
    const data = await fetch(`${BASE_URL}/api/current`);

    if (!data.ok) {
      throw new Error("Failed to fetch current weather data");
    }

    return await data.json();
  } catch (error) {
    console.error(error);
    throw new Error(
      `Failed to fetch data from the current weather API: ${error}`
    );
  }
};
