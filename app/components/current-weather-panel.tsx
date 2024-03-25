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
      <div className="flex justify-between items-center">
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
        <div className="flex flex-col space-y-2 bg-small-panel p-4 rounded-xl">
          <div className="text-gray-400 flex items-center space-x-2">
            <UvIndexIcon className="text-gray-400 w-6 h-6" />
            <div className="uppercase font-normal text-xs">UV Index</div>
          </div>
          <div className="text-white text-2xl font-semibold flex items-center space-x-2">
            <span>{uv_index}</span>
            <UvLevelBadge uvIndex={uv_index} />
          </div>
          <div className="text-gray-400 text-xs">
            {uvIndexToSuggestion(uv_index)}
          </div>
        </div>
        <div className="flex flex-col space-y-2 bg-small-panel p-4 rounded-lg">
          <div className="text-gray-400 flex items-center space-x-2">
            <PrecipitationIcon className="text-gray-400 w-6 h-6" />
            <div className="uppercase font-normal text-xs">Precipitation</div>
          </div>
          <div className="text-white text-2xl font-semibold">
            {precip} {unitSystem.precipitation}
          </div>
          <div className="text-gray-400 text-xs">
            {precipitationToDescription(precip)}
          </div>
        </div>
        <div className="flex flex-col space-y-2 bg-small-panel p-4 rounded-lg">
          <div className="text-gray-400 flex items-center space-x-2">
            <VisibilityIcon className="text-gray-400 w-6 h-6" />
            <div className="uppercase font-normal text-xs">Visibility</div>
          </div>

          <div className="text-white text-2xl font-semibold">
            {visibility} {unitSystem.visibility}
          </div>
          <div className="text-gray-400 text-xs">
            {visibilityToDescription(visibility)}
          </div>
        </div>
        <div className="flex flex-col space-y-2 bg-small-panel p-4 rounded-lg">
          <div className="text-gray-400 flex items-center space-x-2">
            <HumidityIcon className="text-gray-400 w-6 h-6" />
            <div className="uppercase font-normal text-xs">Humidity</div>
          </div>

          <div className="text-white text-2xl font-semibold">{humidity} %</div>
          <div className="text-gray-400 text-xs">
            {humidityToDescription(humidity)}
          </div>
        </div>
        <div className="flex flex-col space-y-2 bg-small-panel p-4 rounded-lg">
          <div className="text-gray-400 flex items-center space-x-2">
            <WindIcon className="text-gray-400 w-6 h-6" />
            <div className="uppercase font-normal text-xs">Wind</div>
          </div>

          <div className="text-white text-2xl font-semibold">
            {wind_speed} {unitSystem.windSpeed}
          </div>
          <div className="text-gray-400"></div>
        </div>
        <div className="flex flex-col space-y-2 bg-small-panel p-4 rounded-lg">
          <div className="text-gray-400 flex items-center space-x-2">
            <PressureIcon className="text-gray-400 w-6 h-6" />
            <div className="uppercase font-normal text-xs">Pressure</div>
          </div>

          <div className="text-white text-2xl font-semibold">
            {pressure} {unitSystem.pressure}
          </div>
          <div className="text-gray-400 text-xs">
            {pressureToDescription(pressure)}
          </div>
        </div>
      </div>
    </div>
  );
};
