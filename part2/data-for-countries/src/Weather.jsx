import axios from "axios";
import { useEffect, useState } from "react";

function Weather({ country }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const capitalLat = country.capitalInfo.latlng[0];
    const capitalLng = country.capitalInfo.latlng[1];
    const key = import.meta.env.VITE_KEY;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${capitalLat}&lon=${capitalLng}&appid=${key}&units=metric`
      )
      .then((response) => response.data)
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  if (loading) return <h3>loading...</h3>;
  if (error) return <h3>error {error}</h3>;

  console.log(weather.weather[0].icon);
  return (
    <>
      <h3>weather in {country.capital[0]}</h3>
      <div>
        <p>temperatur {weather.main.temp} celcius</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="weather icon"
          style={{ background: "gray" }}
        />
        <p>wind {weather.wind.speed} m/s</p>
      </div>
    </>
  );
}

export default Weather;
