export const currentWeatherResponse = {
  request: { type: "IP", query: "123.123.123.123", language: "en", unit: "m" },
  location: {
    name: "Tallinn",
    country: "Estonia",
    region: "Harjumaa",
    lat: "50.434",
    lon: "20.728",
    timezone_id: "Europe/Tallinn",
    localtime: "2024-03-23 23:58",
    localtime_epoch: 1711238280,
    utc_offset: "2.0",
  },
  current: {
    observation_time: "09:58 PM",
    temperature: 2,
    weather_code: 122,
    weather_icons: [
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png",
    ],
    weather_descriptions: ["Overcast"],
    wind_speed: 11,
    wind_degree: 230,
    wind_dir: "SW",
    pressure: 995,
    precip: 0,
    humidity: 87,
    cloudcover: 100,
    feelslike: -2,
    uv_index: 1,
    visibility: 10,
    is_day: "no",
  },
};

export const currentWeatherResponseFahrenheit = {
  request: { type: "IP", query: "123.123.123.123", language: "en", unit: "f" },
  location: {
    name: "Tallinn",
    country: "Estonia",
    region: "Harjumaa",
    lat: "50.434",
    lon: "20.728",
    timezone_id: "Europe/Tallinn",
    localtime: "2024-04-02 10:47",
    localtime_epoch: 1712054820,
    utc_offset: "3.0",
  },
  current: {
    observation_time: "07:47 AM",
    temperature: 37,
    weather_code: 122,
    weather_icons: [
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png",
    ],
    weather_descriptions: ["Overcast"],
    wind_speed: 16,
    wind_degree: 60,
    wind_dir: "ENE",
    pressure: 1001,
    precip: 0,
    humidity: 100,
    cloudcover: 100,
    feelslike: 27,
    uv_index: 1,
    visibility: 5,
    is_day: "yes",
  },
};

export const currentWeatherResponseKelvin = {
  request: { type: "IP", query: "123.123.123.123", language: "en", unit: "s" },
  location: {
    name: "Tallinn",
    country: "Estonia",
    region: "Harjumaa",
    lat: "50.434",
    lon: "20.728",
    timezone_id: "Europe/Tallinn",
    localtime: "2024-04-02 10:47",
    localtime_epoch: 1712054820,
    utc_offset: "3.0",
  },
  current: {
    observation_time: "07:47 AM",
    temperature: 276,
    weather_code: 122,
    weather_icons: [
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png",
    ],
    weather_descriptions: ["Overcast"],
    wind_speed: 26,
    wind_degree: 60,
    wind_dir: "ENE",
    pressure: 1001,
    precip: 0.1,
    humidity: 100,
    cloudcover: 100,
    feelslike: 270,
    uv_index: 1,
    visibility: 8,
    is_day: "yes",
  },
};
