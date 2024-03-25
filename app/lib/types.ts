import { forecastResponse } from "../mock-data/forecast";
import { UnitParamerter } from "./unit-parameter";

export type SvgProps = React.SVGProps<SVGSVGElement>;
type RequestType = "City" | "LatLon" | "IP" | "Zipcode";

type Request = {
  type: RequestType;
  query: string;
  language: string;
  unit: UnitParamerter;
};

type Location = {
  name: string;
  country: string;
  region: string;
  lat: string;
  lon: string;
  timezone_id: string;
  localtime: string;
  localtime_epoch: number;
  utc_offset: string;
};

type Current = {
  observation_time: string;
  temperature: number;
  weather_code: number;
  weather_icons: string[];
  weather_descriptions: string[];
  wind_speed: number;
  wind_degree: number;
  wind_dir: string;
  pressure: number;
  precip: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
  uv_index: number;
  visibility: number;
};

export type CurrentWeatherData = {
  request: Request;
  location: Location;
  current: Current;
};

export type Forecast = typeof forecastResponse;
