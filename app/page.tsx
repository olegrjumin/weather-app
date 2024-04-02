import { CurrentWeatherPanel } from "./components/current-weather-panel/current-weather-panel";

import { getCurrentLocationPhoto } from "./actions/get-current-location-photo";
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

  const currentPhoto = await getCurrentLocationPhoto([
    currentWeather.location.name,
    currentWeather.location.country,
    currentWeather.location.region,
    currentWeather.current.weather_descriptions[0],
  ]);

  return (
    <main className="container mx-auto mt-12">
      <HeaderPanel queryUnit={unit} />
      <CurrentWeatherPanel
        data={currentWeather}
        currentPhoto={currentPhoto.urls.regular}
      />
    </main>
  );
}
