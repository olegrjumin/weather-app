/**
 * @jest-environment jsdom
 */
import { within } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";

import { CurrentWeatherData } from "../lib/types";
import { currentWeatherResponse } from "../mock-data/current-weather";
import { CurrentWeatherPanel } from "./current-weather-panel";
import {
  humidityToDescription,
  precipitationToDescription,
  pressureToDescription,
  uvIndexToDescription,
  uvIndexToSuggestion,
} from "./description-helpers";

const data = currentWeatherResponse as CurrentWeatherData;

test.each([[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11]])(
  "renders correct panel content for uv index %i",
  (level) => {
    const newData = { ...data, current: { ...data.current, uv_index: level } };
    render(<CurrentWeatherPanel data={newData} />);
    const uvIndexPanel = screen.getByTestId("uv-index-panel");

    expect(within(uvIndexPanel).getByRole("heading")).toHaveTextContent(
      "UV Index"
    );
    expect(uvIndexPanel).toHaveTextContent(`${level}`);
    expect(uvIndexPanel).toHaveTextContent(uvIndexToSuggestion(level));
    expect(uvIndexPanel).toHaveTextContent(uvIndexToDescription(level));
  }
);

test.each([[0], [1], [6], [20]])(
  "renders correct panel content for precipitation %i",
  (level) => {
    const newData = { ...data, current: { ...data.current, precip: level } };
    render(<CurrentWeatherPanel data={newData} />);
    const precipitationPanel = screen.getByTestId("precipitation-panel");

    expect(within(precipitationPanel).getByRole("heading")).toHaveTextContent(
      "Precipitation"
    );

    expect(precipitationPanel).toHaveTextContent(`${level} mm`);

    expect(precipitationPanel).toHaveTextContent(
      precipitationToDescription(level)
    );
  }
);

test.each([[0], [1], [6], [20]])(
  "renders correct panel content for visibility %i",
  (level) => {
    const newData = {
      ...data,
      current: { ...data.current, visibility: level },
    };
    render(<CurrentWeatherPanel data={newData} />);
    const visibilityPanel = screen.getByTestId("visibility-panel");

    expect(within(visibilityPanel).getByRole("heading")).toHaveTextContent(
      "Visibility"
    );

    expect(visibilityPanel).toHaveTextContent(`${level} km`);
  }
);

test.each([[0], [29], [30], [59], [60], [100]])(
  "renders correct panel content for humidity %i",
  (level) => {
    const newData = { ...data, current: { ...data.current, humidity: level } };
    render(<CurrentWeatherPanel data={newData} />);
    const humidityPanel = screen.getByTestId("humidity-panel");

    expect(within(humidityPanel).getByRole("heading")).toHaveTextContent(
      "Humidity"
    );

    expect(humidityPanel).toHaveTextContent(`${level} %`);
    expect(humidityPanel).toHaveTextContent(humidityToDescription(level));
  }
);

test.each([
  [0],
  [4],
  [5],
  [19],
  [20],
  [39],
  [40],
  [59],
  [60],
  [74],
  [75],
  [89],
  [90],
  [104],
  [105],
  [119],
  [120],
  [130],
])("renders correct panel content for wind speed %i", (level) => {
  const newData = { ...data, current: { ...data.current, wind_speed: level } };
  render(<CurrentWeatherPanel data={newData} />);
  const windPanel = screen.getByTestId("wind-panel");

  expect(within(windPanel).getByRole("heading")).toHaveTextContent("Wind");

  expect(windPanel).toHaveTextContent(`${level} km/h`);
});

test.each([
  [979],
  [980],
  [999],
  [1000],
  [1019],
  [1020],
  [1039],
  [1040],
  [1050],
])("renders correct panel content for pressure %i", (level) => {
  const newData = { ...data, current: { ...data.current, pressure: level } };
  render(<CurrentWeatherPanel data={newData} />);
  const pressurePanel = screen.getByTestId("pressure-panel");

  expect(within(pressurePanel).getByRole("heading")).toHaveTextContent(
    "Pressure"
  );

  expect(pressurePanel).toHaveTextContent(`${level} mb`);
  expect(pressurePanel).toHaveTextContent(pressureToDescription(level));
});
