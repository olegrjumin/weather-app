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

const windSpeedToDescription = (windSpeed: number) => {
  if (windSpeed < 5) {
    return "Calm: Wind barely perceptible, smoke rises vertically.";
  } else if (windSpeed < 20) {
    return "Moderate breeze: Leaves rustle, small twigs in motion.";
  } else if (windSpeed < 40) {
    return "Strong breeze: Branches sway, umbrellas difficult to control.";
  } else if (windSpeed < 60) {
    return "Near gale: Whole trees in motion, resistance felt walking against the wind.";
  } else if (windSpeed < 75) {
    return "Gale: Twigs break off trees, walking difficult.";
  } else if (windSpeed < 90) {
    return "Strong gale: Minor structural damage may occur, walking hazardous.";
  } else if (windSpeed < 105) {
    return "Storm: Trees uprooted, considerable structural damage.";
  } else if (windSpeed < 120) {
    return "Violent storm: Widespread damage, very risky to be outside.";
  } else {
    return "Hurricane force: Devastation occurs, stay indoors and seek shelter.";
  }
};

export {
  humidityToDescription,
  precipitationToDescription,
  pressureToDescription,
  uvIndexToDescription,
  uvIndexToSuggestion,
  visibilityToDescription,
  windSpeedToDescription,
};
