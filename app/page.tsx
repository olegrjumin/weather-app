import { CurrentWeatherPanel } from "./components/current-weather-panel/current-weather-panel";

import { getCurrentWeather } from "./actions/get-current-weather";
import { HeaderPanel } from "./components/header-panel";
import { getCurrentWeatherMock } from "./lib/mock-calls";
import { UnitParamerter } from "./lib/unit-parameter";

export const revalidate = 1800;

type HomeProps = {
  searchParams: {
    unit?: UnitParamerter;
  };
};

export default async function Home({
  searchParams: { unit = "m" },
}: HomeProps) {
  const useMock = true;
  const currentWeather = useMock
    ? await getCurrentWeatherMock({ unit })
    : await getCurrentWeather({ unit });

  return (
    <main className="container mx-auto mt-12">
      <HeaderPanel queryUnit={unit} />
      <CurrentWeatherPanel data={currentWeather} />
    </main>
  );
}
