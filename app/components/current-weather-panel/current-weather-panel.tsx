import Image from "next/image";
import { CurrentWeatherData } from "../../lib/types";
import { getUnits } from "../../lib/unit-parameter";
import { Card } from "../ui/card";
import { WeatherParametersList } from "./weather-parameters-list/weather-parameters-list";

export const CurrentWeatherPanel = ({
  data,
  currentPhoto,
}: {
  data: CurrentWeatherData;
  currentPhoto: string;
}) => {
  const { current } = data;

  const unit = data.request.unit;
  const unitSystem = getUnits(unit);

  const image = current.weather_icons[0] || "";
  const description = current.weather_descriptions[0] || "";

  const { feelslike } = current;

  return (
    <div className="bg-main-panel mx-1 p-4 md:p-6 rounded-3xl">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <Card className="row-span-2 h-64">
          <Image
            src={currentPhoto}
            alt={description}
            width={100}
            height={100}
            className="size-full object-cover rounded-md"
          />
        </Card>

        <WeatherParametersList currentWeatherData={current} unit={unit} />
      </div>
    </div>
  );
};
