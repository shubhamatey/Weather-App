import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState();
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"e5d2e95c7faaa93649c594e89dc690bf"}&units=metric`
      );
      setWeather(response.data);
      setError("");
    } catch (error) {
      setError("Enter valid city name");
      setWeather(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={getWeather}>Get Weather</button>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather_cast">
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
