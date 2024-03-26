import { CurrentWeatherPanel } from "./components/current-weather-panel/current-weather-panel";

import { getCurrentWeather } from "./actions/get-current-weather";
import { HeaderPanel } from "./components/header-panel";
import { UnitParamerter } from "./lib/unit-parameter";

export const revalidate = 1800;

export default async function Home({ searchParams: { unit = "m" } }) {
  const queryUnit = unit as UnitParamerter;
  const currentWeather = await getCurrentWeather({ unit: queryUnit });

  return (
    <main className="container mx-auto mt-12">
      <HeaderPanel queryUnit={queryUnit} />
      <CurrentWeatherPanel data={currentWeather} />
    </main>
  );
}
