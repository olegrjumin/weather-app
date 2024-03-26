/**
 * @jest-environment jsdom
 */
import { within } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";

import { CurrentWeatherData } from "../../lib/types";
import { currentWeatherResponse } from "../../mock-data/current-weather";
import { CurrentWeatherPanel } from "./current-weather-panel";
import {
  humidityToDescription,
  precipitationToDescription,
  pressureToDescription,
  uvIndexToDescription,
  uvIndexToSuggestion,
  visibilityToDescription,
  windSpeedToDescription,
} from "./weather-parameters-list/description-helpers";

const data = currentWeatherResponse as CurrentWeatherData;

test("renders correct location", () => {
  render(<CurrentWeatherPanel data={data} />);
  const mainPanel = screen.getByTestId("main-panel");

  expect(mainPanel).toHaveTextContent("Overcast");
  expect(mainPanel).toHaveTextContent("-2°C");
  expect(mainPanel).toHaveTextContent("Feels like -2°C");

  expect(mainPanel).toHaveTextContent(
    `${data.location.name}, ${data.location.country}, ${data.location.region}`
  );
});

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
  expect(windPanel).toHaveTextContent(windSpeedToDescription(level));
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

test("renders correct panel content for unit f", () => {
  const newData: CurrentWeatherData = {
    ...data,
    request: {
      ...data.request,
      unit: "f",
    },
    current: {
      ...data.current,
      precip: 100,
      visibility: 2.49,
      wind_speed: 47.22,
      humidity: 100,
      pressure: 1000,
    },
  };
  render(<CurrentWeatherPanel data={newData} />);
  const precipitationPanel = screen.getByTestId("precipitation-panel");

  expect(precipitationPanel).toHaveTextContent("100 in");

  const precipitationInMm = 2540;
  expect(precipitationPanel).toHaveTextContent(
    precipitationToDescription(precipitationInMm)
  );

  const visibilityPanel = screen.getByTestId("visibility-panel");
  expect(visibilityPanel).toHaveTextContent("2.49 mi");

  const visibilityInKm = 4;
  expect(visibilityPanel).toHaveTextContent(
    visibilityToDescription(visibilityInKm)
  );

  const windPanel = screen.getByTestId("wind-panel");
  expect(windPanel).toHaveTextContent("47.22 mph");

  const windSpeedInKm = 76;
  expect(windPanel).toHaveTextContent(windSpeedToDescription(windSpeedInKm));

  const humidityPanel = screen.getByTestId("humidity-panel");
  expect(humidityPanel).toHaveTextContent("100 %");
  expect(humidityPanel).toHaveTextContent(humidityToDescription(100));

  const pressurePanel = screen.getByTestId("pressure-panel");
  expect(pressurePanel).toHaveTextContent("1000 mb");
  expect(pressurePanel).toHaveTextContent(pressureToDescription(1000));
});
