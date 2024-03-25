import { BASE_URL } from "../lib/constants";
import { Forecast } from "../lib/types";

export const getForecast = async (): Promise<Forecast> => {
  try {
    const data = await fetch(`${BASE_URL}/api/forecast`);

    if (!data.ok) {
      throw new Error("Failed to fetch forecast data");
    }

    return await data.json();
  } catch (error) {
    console.error(error);
    throw new Error(
      `Failed to fetch data from the current weather API: ${error}`
    );
  }
};
