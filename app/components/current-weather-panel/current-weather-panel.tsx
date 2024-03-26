import Image from "next/image";
import { CurrentWeatherData } from "../../lib/types";
import { getUnits } from "../../lib/unit-parameter";
import { WeatherParametersList } from "./weather-parameters-list/weather-parameters-list";

export const CurrentWeatherPanel = ({ data }: { data: CurrentWeatherData }) => {
  const { current } = data;

  const unitSystem = getUnits(data.request.unit);

  const image = current.weather_icons[0] || "";
  const description = current.weather_descriptions[0] || "";

  const { feelslike } = current;

  return (
    <div className="bg-main-panel mx-1 p-4 md:p-6 rounded-3xl max-w-4xl md:mx-auto">
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

      <WeatherParametersList
        currentWeatherData={current}
        unitSystem={unitSystem}
      />
    </div>
  );
};
