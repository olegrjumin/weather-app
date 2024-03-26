import {
  HumidityIcon,
  PrecipitationIcon,
  PressureIcon,
  UvIndexIcon,
  VisibilityIcon,
  WindIcon,
} from "@/app/lib/icons";
import { CurrentWeatherData } from "@/app/lib/types";
import { UnitMap, UnitParamerter } from "@/app/lib/unit-parameter";
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
  unitSystem: UnitMap[UnitParamerter]
) => {
  const { uv_index, visibility, wind_speed, precip, pressure, humidity } =
    current;

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
      value: precip,
      valueWithUnit: `${precip} ${unitSystem.precipitation}`,
      description: precipitationToDescription(precip),
    },
    {
      id: "3",
      dataTestId: "visibility-panel",
      icon: <VisibilityIcon />,
      title: "Visibility",
      value: visibility,
      valueWithUnit: `${visibility} ${unitSystem.visibility}`,
      description: visibilityToDescription(visibility),
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
      value: wind_speed,
      valueWithUnit: `${wind_speed} ${unitSystem.windSpeed}`,
      description: windSpeedToDescription(wind_speed),
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
  unitSystem,
}: {
  currentWeatherData: CurrentWeatherData["current"];
  unitSystem: UnitMap[UnitParamerter];
}) => {
  const items = getPanelItems(currentWeatherData, unitSystem);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      {items.map((item) => {
        return (
          <Card key={item.id} dataTestId={item.dataTestId}>
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
    </div>
  );
};
