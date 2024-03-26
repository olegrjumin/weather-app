const TEMPERATURE = "temperature";
const WIND_SPEED = "windSpeed";
const PRESSURE = "pressure";
const PRECIPITATION = "precipitation";
const TOTAL_SNOW = "totalSnow";
const VISIBILITY = "visibility";

export const metricUnits = {
  [TEMPERATURE]: "°C",
  [WIND_SPEED]: "km/h",
  [VISIBILITY]: "km",
  [PRESSURE]: "mb",
  [PRECIPITATION]: "mm",
  [TOTAL_SNOW]: "cm",
} as const;

export const scientificUnits = {
  [TEMPERATURE]: "K",
  [WIND_SPEED]: "km/h",
  [VISIBILITY]: "km",
  [PRESSURE]: "mb",
  [PRECIPITATION]: "mm",
  [TOTAL_SNOW]: "cm",
} as const;

export const farenheitUnits = {
  [TEMPERATURE]: "°F",
  [WIND_SPEED]: "mph",
  [VISIBILITY]: "mi",
  [PRESSURE]: "mb",
  [PRECIPITATION]: "in",
  [TOTAL_SNOW]: "in",
} as const;

type MetricUnits = typeof metricUnits;
type ScientificUnits = typeof scientificUnits;
type FahrenheitUnits = typeof farenheitUnits;

export type UnitParamerter = "m" | "s" | "f";

export type UnitMap = {
  m: MetricUnits;
  s: ScientificUnits;
  f: FahrenheitUnits;
};

export function getUnits<T extends keyof UnitMap>(unit: T): UnitMap[T] {
  switch (unit) {
    case "m":
      return metricUnits as UnitMap[T];
    case "s":
      return scientificUnits as UnitMap[T];
    case "f":
      return farenheitUnits as UnitMap[T];
    default:
      return metricUnits as UnitMap[T];
  }
}
