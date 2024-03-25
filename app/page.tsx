import { getCurrentWeather } from "./actions/get-current-weather";
import { CurrentWeatherPanel } from "./components/current-weather-panel";

export default async function Home() {
  const currentWeather = await getCurrentWeather();

  return (
    <main className="container mx-auto mt-12">
      <CurrentWeatherPanel data={currentWeather} />
    </main>
  );
}
