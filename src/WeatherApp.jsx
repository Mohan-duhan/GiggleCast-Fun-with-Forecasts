import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp() {
  const [WeatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 32.87,
    humidity: 35,
    temp: 33.05,
    tempMax: 33.05,
    tempMin: 33.05,
    weather: "sunny",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Gigglecast: Forecasts with Fun!</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={WeatherInfo} />
      </div>
    </>
  );
}
