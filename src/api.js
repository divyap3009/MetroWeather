const API_KEY = "f44dadd4ab56638cf826fe35e0c262b3";

export async function fetchCityData() {
  try {
    const response = await fetch(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch city data");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching city data:", error);
    throw error;
  }
}

export async function fetchWeatherData(cityId) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}
