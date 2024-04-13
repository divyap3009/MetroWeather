import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchWeatherData } from "../api";
import "../styles/WeatherPage.css";

function WeatherPage() {
  const { cityId } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchWeatherData(cityId)
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [cityId]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="weather-container">
      <header className="weather-header">
        <h1 className="weather-heading">Weather Page</h1>
      </header>
      {weatherData && (
        <div className="weather-info">
          <h2 className="city">
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <div className="temperature">
            <i className="fas fa-thermometer-half"></i> Current Temperature:{" "}
            {weatherData.main.temp}°C
          </div>
          <div className="description">
            <i className="fas fa-cloud"></i> Description:{" "}
            {weatherData.weather[0].description}
          </div>
          <div className="humidity">
            <i className="fas fa-tint"></i> Humidity:{" "}
            {weatherData.main.humidity}%
          </div>
          <div className="wind-speed">
            <i className="fas fa-wind"></i> Wind Speed: {weatherData.wind.speed}{" "}
            m/s
          </div>
          <div className="pressure">
            <i className="fas fa-tachometer-alt"></i> Pressure:{" "}
            {weatherData.main.pressure} hPa
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherPage;
