import { KM_TO_MILES, MM_TO_INCH } from "@/app/lib/constants";
import {
  HumidityIcon,
  PrecipitationIcon,
  PressureIcon,
  UvIndexIcon,
  VisibilityIcon,
  WindIcon,
} from "@/app/lib/icons";
import { CurrentWeatherData } from "@/app/lib/types";
import { UnitParamerter, getUnits } from "@/app/lib/unit-parameter";
import { Card, CardContent, CardDescription, CardTitle } from "../../ui/card";
import { UvLevelBadge } from "../../ui/uv-level-badge";
import {
  humidityToDescription,
  precipitationToDescription,
  pressureToDescription,
  uvIndexToSuggestion,
  visibilityToDescription,
  windSpeedToDescription,
} from "./description-helpers";

const getPanelItems = (
  current: CurrentWeatherData["current"],
  unit: UnitParamerter
) => {
  const unitSystem = getUnits(unit);
  const { uv_index, visibility, wind_speed, precip, pressure, humidity } =
    current;

  const precipitationInMm = unit === "f" ? precip * MM_TO_INCH : precip;
  const visibilityInKm = unit === "f" ? visibility * KM_TO_MILES : visibility;
  const windSpeedInKm = unit === "f" ? wind_speed * KM_TO_MILES : wind_speed;

  return [
    {
      id: "1",
      dataTestId: "uv-index-panel",
      icon: <UvIndexIcon />,
      title: "UV Index",
      value: uv_index,
      valueWithUnit: uv_index,
      description: uvIndexToSuggestion(uv_index),
    },
    {
      id: "2",
      dataTestId: "precipitation-panel",
      icon: <PrecipitationIcon />,
      title: "Precipitation",
      value: precipitationInMm,
      valueWithUnit: `${precip} ${unitSystem.precipitation}`,
      description: precipitationToDescription(precipitationInMm),
    },
    {
      id: "3",
      dataTestId: "visibility-panel",
      icon: <VisibilityIcon />,
      title: "Visibility",
      value: visibilityInKm,
      valueWithUnit: `${visibility} ${unitSystem.visibility}`,
      description: visibilityToDescription(visibilityInKm),
    },
    {
      id: "4",
      dataTestId: "humidity-panel",
      icon: <HumidityIcon />,
      title: "Humidity",
      value: humidity,
      valueWithUnit: `${humidity} %`,
      description: humidityToDescription(humidity),
    },
    {
      id: "5",
      dataTestId: "wind-panel",
      icon: <WindIcon />,
      title: "Wind",
      value: windSpeedInKm,
      valueWithUnit: `${wind_speed} ${unitSystem.windSpeed}`,
      description: windSpeedToDescription(windSpeedInKm),
    },
    {
      id: "6",
      dataTestId: "pressure-panel",
      icon: <PressureIcon />,
      title: "Pressure",
      value: pressure,
      valueWithUnit: `${pressure} ${unitSystem.pressure}`,
      description: pressureToDescription(pressure),
    },
  ];
};

export const WeatherParametersList = ({
  currentWeatherData,
  unit,
}: {
  currentWeatherData: CurrentWeatherData["current"];
  unit: UnitParamerter;
}) => {
  const items = getPanelItems(currentWeatherData, unit);
  return (
    <>
      {items.map((item) => {
        return (
          <Card key={item.id} dataTestId={item.dataTestId} className="h-30">
            <CardTitle icon={item.icon} title={item.title} />
            <CardContent>
              <div className="flex items-center space-x-2">
                <span>{item.valueWithUnit}</span>
                {item.dataTestId === "uv-index-panel" && (
                  <UvLevelBadge uvIndex={item.value} />
                )}
              </div>
            </CardContent>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        );
      })}
    </>
  );
};
