import { CurrentWeatherData } from "@/app/lib/types";
import { headers } from "next/headers";

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

export const getCurrentWeather = async (): Promise<CurrentWeatherData> => {
  const accessKey = process.env.WEATHERSTACK_API_KEY;
  const ip = getIp();

  const isDev = process.env.NODE_ENV === "development";
  const query = isDev ? "fetch:ip" : ip;

  if (!accessKey) {
    throw new Error("Missing Weatherstack API key");
  }

  const response = await fetch(
    `http://api.weatherstack.com/current?access_key=${accessKey}&query=${query}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
};
