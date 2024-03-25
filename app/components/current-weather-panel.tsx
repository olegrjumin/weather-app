import Image from "next/image";
import {
  HumidityIcon,
  PrecipitationIcon,
  PressureIcon,
  UvIndexIcon,
  VisibilityIcon,
  WindIcon,
} from "../lib/icons";
import { CurrentWeatherData } from "../lib/types";
import { getUnits } from "../lib/unit-parameter";
import {
  humidityToDescription,
  precipitationToDescription,
  pressureToDescription,
  uvIndexToSuggestion,
  visibilityToDescription,
  windSpeedToDescription,
} from "./description-helpers";
import { UvLevelBadge } from "./uv-level-badge";

export const CurrentWeatherPanel = ({ data }: { data: CurrentWeatherData }) => {
  const unitSystem = getUnits(data.request.unit);

  const { current } = data;

  const image = current.weather_icons[0] || "";
  const description = current.weather_descriptions[0] || "";

  const {
    uv_index,
    visibility,
    wind_speed,
    precip,
    pressure,
    feelslike,
    humidity,
  } = current;

  return (
    <div className="bg-main-panel p-6 rounded-3xl max-w-4xl mx-auto">
      <div
        className="flex justify-between items-center"
        data-testid="main-panel"
      >
        <div className="flex space-x-4 items-center">
          <Image src={image} alt={description} width={50} height={50} />
          <div>
            <div className="text-white text-6xl font-semibold">
              {current.temperature}
              {unitSystem.temperature}
            </div>
            <div className="text-gray-400">
              {data.location.name}, {data.location.country},{" "}
              {data.location.region}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-white text-lg">{description}</div>
          <div className="text-gray-400">
            Feels like {feelslike}
            {unitSystem.temperature}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div
          className="flex flex-col space-y-2 bg-small-panel p-4 rounded-xl"
          data-testid="uv-index-panel"
        >
          <div className="text-gray-400 flex items-center space-x-2">
            <UvIndexIcon className="text-gray-400 w-6 h-6" />
            <h3 className="uppercase font-normal text-xs">UV Index</h3>
          </div>
          <div className="text-white text-2xl font-semibold flex items-center space-x-2">
            <span>{uv_index}</span>
            <UvLevelBadge uvIndex={uv_index} />
          </div>
          <p className="text-gray-400 text-xs">
            {uvIndexToSuggestion(uv_index)}
          </p>
        </div>
        <div
          className="flex flex-col space-y-2 bg-small-panel p-4 rounded-lg"
          data-testid="precipitation-panel"
        >
          <div className="text-gray-400 flex items-center space-x-2">
            <PrecipitationIcon className="text-gray-400 w-6 h-6" />
            <h3 className="uppercase font-normal text-xs">Precipitation</h3>
          </div>
          <div className="text-white text-2xl font-semibold">
            {precip} {unitSystem.precipitation}
          </div>
          <p className="text-gray-400 text-xs">
            {precipitationToDescription(precip)}
          </p>
        </div>
        <div
          className="flex flex-col space-y-2 bg-small-panel p-4 rounded-lg"
          data-testid="visibility-panel"
        >
          <div className="text-gray-400 flex items-center space-x-2">
            <VisibilityIcon className="text-gray-400 w-6 h-6" />
            <h3 className="uppercase font-normal text-xs">Visibility</h3>
          </div>

          <div className="text-white text-2xl font-semibold">
            {visibility} {unitSystem.visibility}
          </div>
          <p className="text-gray-400 text-xs">
            {visibilityToDescription(visibility)}
          </p>
        </div>
        <div
          className="flex flex-col space-y-2 bg-small-panel p-4 rounded-lg"
          data-testid="humidity-panel"
        >
          <div className="text-gray-400 flex items-center space-x-2">
            <HumidityIcon className="text-gray-400 w-6 h-6" />
            <h3 className="uppercase font-normal text-xs">Humidity</h3>
          </div>

          <div className="text-white text-2xl font-semibold">{humidity} %</div>
          <p className="text-gray-400 text-xs">
            {humidityToDescription(humidity)}
          </p>
        </div>
        <div
          className="flex flex-col space-y-2 bg-small-panel p-4 rounded-lg"
          data-testid="wind-panel"
        >
          <div className="text-gray-400 flex items-center space-x-2">
            <WindIcon className="text-gray-400 w-6 h-6" />
            <h3 className="uppercase font-normal text-xs">Wind</h3>
          </div>

          <div className="text-white text-2xl font-semibold">
            {wind_speed} {unitSystem.windSpeed}
          </div>
          <div className="text-gray-400 text-xs">
            {windSpeedToDescription(wind_speed)}
          </div>
        </div>
        <div
          className="flex flex-col space-y-2 bg-small-panel p-4 rounded-lg"
          data-testid="pressure-panel"
        >
          <div className="text-gray-400 flex items-center space-x-2">
            <PressureIcon className="text-gray-400 w-6 h-6" />
            <h3 className="uppercase font-normal text-xs">Pressure</h3>
          </div>

          <div className="text-white text-2xl font-semibold">
            {pressure} {unitSystem.pressure}
          </div>
          <p className="text-gray-400 text-xs">
            {pressureToDescription(pressure)}
          </p>
        </div>
      </div>
    </div>
  );
};
