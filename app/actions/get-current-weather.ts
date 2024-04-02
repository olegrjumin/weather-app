import { CurrentWeatherData } from "@/app/lib/types";
import { headers } from "next/headers";
import { UnitParamerter } from "../lib/unit-parameter";

if (
  !process.env.WEATHERSTACK_API_KEY &&
  process.env.NEXT_PUBLIC_USE_MOCK_API !== "true"
) {
  throw new Error("Missing Weatherstack API key");
}

const getIp = () => {
  let forwardedFor = headers().get("x-forwarded-for");
  let realIp = headers().get("x-real-ip");

  if (forwardedFor) {
    return forwardedFor.split(",")[0];
  }

  if (realIp) {
    return realIp.trim();
  }
};

export const getCurrentWeather = async ({
  unit,
}: {
  unit?: UnitParamerter;
} = {}): Promise<CurrentWeatherData> => {
  const accessKey = process.env.WEATHERSTACK_API_KEY;
  const ip = getIp();

  const isDev = process.env.NODE_ENV === "development";
  const query = isDev ? "fetch:ip" : ip;

  if (!accessKey) {
    throw new Error("Missing Weatherstack API key");
  }

  const response = await fetch(
    `http://api.weatherstack.com/current?access_key=${accessKey}&query=${query}&units=${unit}`,
    {
      next: {
        revalidate: 1800,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  if (!data.success && data.error) {
    throw new Error(data.error.info);
  }

  return data;
};
