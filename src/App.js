import { useState } from "react";
import styles from "./App.module.css";
import Input from "./components/Input";
import Header from "./components/Header";
import Details from "./components/Details";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState("");

  const getLocationHandler = async (lat, lon) => {
    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=47980330b0d3e17d2bc298d8768bbc03`
      );
      if (!response.ok) throw new Error("Something went wrong!");
      const data = await response.json();
      const weatherData = {
        name: data.name,
        temp: Math.ceil(data.main.temp - 273.15),
        feels_like: Math.ceil(data.main.feels_like - 273.15),
        humidity: Math.ceil(data.main.humidity),
        weather: data.weather[0].description,
        winds: Math.ceil(data.wind.speed),
      };
      setWeatherData(weatherData);
    } catch (error) {
      setError(error.message);
    }
  };

  const errorHandler = (error) => {
    setError(error);
  };

  return (
    <div className={styles.container}>
      <Input onGet={getLocationHandler} onError={errorHandler} />
      {error === "" && weatherData.name && <Header data={weatherData} />}
      {error === "" && weatherData.name && <Details data={weatherData} />}
    </div>
  );
}

export default App;
