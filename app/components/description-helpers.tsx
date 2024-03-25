const uvIndexToDescription = (uvIndex: number) => {
  if (uvIndex < 3) {
    return "Low";
  } else if (uvIndex < 6) {
    return "Moderate";
  } else if (uvIndex < 8) {
    return "High";
  } else if (uvIndex < 11) {
    return "Very High";
  } else {
    return "Extreme";
  }
};

const uvIndexToSuggestion = (uvIndex: number) => {
  if (uvIndex < 3) {
    return "Enjoy outdoors!";
  } else if (uvIndex < 6) {
    return "Wear sunscreen.";
  } else if (uvIndex < 8) {
    return "Apply SPF 30+ sunscreen.";
  } else if (uvIndex < 11) {
    return "Wear sunscreen, hat, and sunglasses.";
  } else {
    return "Avoid outdoor activities.";
  }
};

const feelsLikeToDescription = (feelsLike: number) => {
  if (feelsLike < 0) {
    return "Freezing";
  } else if (feelsLike < 10) {
    return "Cold";
  } else if (feelsLike < 20) {
    return "Cool";
  } else if (feelsLike < 30) {
    return "Warm";
  } else if (feelsLike < 40) {
    return "Hot";
  } else {
    return "Very Hot";
  }
};

const feelsLikeToSuggestion = (feelsLike: number) => {
  if (feelsLike < 0) {
    return "Bundle up and stay warm.";
  } else if (feelsLike < 10) {
    return "Wear layers and a coat.";
  } else if (feelsLike < 20) {
    return "Light jacket or sweater might be enough.";
  } else if (feelsLike < 30) {
    return "Dress comfortably in light clothing.";
  } else if (feelsLike < 40) {
    return "Stay hydrated and avoid prolonged exposure to the sun.";
  } else {
    return "Stay indoors or in shaded areas, and keep hydrated.";
  }
};

const pressureToDescription = (pressure: number) => {
  if (pressure < 980) {
    return "Very low pressure: Indicates stormy weather.";
  } else if (pressure >= 980 && pressure < 1000) {
    return "Low pressure: Typically associated with unsettled weather conditions.";
  } else if (pressure >= 1000 && pressure < 1020) {
    return "Normal pressure: Indicates relatively calm and stable weather.";
  } else if (pressure >= 1020 && pressure < 1040) {
    return "High pressure: Usually brings fair weather and clear skies.";
  } else {
    return "Very high pressure: Can result in dry conditions and potentially stagnant air.";
  }
};

const precipitationToDescription = (precipitation: number) => {
  if (precipitation === 0) {
    return "No precipitation: Dry weather conditions.";
  } else if (precipitation < 2) {
    return "Light precipitation: Occasional drizzle or light rain.";
  } else if (precipitation < 10) {
    return "Moderate precipitation: Steady rain or snowfall.";
  } else {
    return "Heavy precipitation: Intense rain or snowfall, possibly leading to flooding or other hazards.";
  }
};

const visibilityToDescription = (visibility: number) => {
  if (visibility < 1) {
    return "Very low visibility: Dense fog or heavy precipitation.";
  } else if (visibility < 5) {
    return "Low visibility: Haze or light precipitation.";
  } else if (visibility < 10) {
    return "Moderate visibility: Generally clear conditions.";
  } else {
    return "High visibility: Excellent visibility under clear skies.";
  }
};

const humidityToDescription = (humidity: number) => {
  if (humidity < 30) {
    return "Low humidity: Dry air, potential for dehydration.";
  } else if (humidity < 60) {
    return "Moderate humidity: Comfortable air, ideal for most people.";
  } else {
    return "High humidity";
  }
};

export {
  feelsLikeToDescription,
  feelsLikeToSuggestion,
  humidityToDescription,
  precipitationToDescription,
  pressureToDescription,
  uvIndexToDescription,
  uvIndexToSuggestion,
  visibilityToDescription,
};
