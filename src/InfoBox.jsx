import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1605371893234-db5e7b01aad2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL = "https://images.unsplash.com/photo-1564217798628-defe46e1cb46?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL = "https://plus.unsplash.com/premium_photo-1670596899123-c4c67735d77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1565065524861-0be4646f450b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const backgroundImage = info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL;

  return (
    <div className="InfoBox">
      <h4>Weather Info - {info.weather}</h4>
      <div className="cardContainer">
        <div className="backgroundImage" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <Card className="cardContent">
          <CardMedia sx={{ height: 180 }} image={backgroundImage} title="Weather Image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}&nbsp;&nbsp;&nbsp;
              {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>
                <i>
                  <p>Temperature - {info.temp}&deg;C</p>
                  <p>Maximum Temperature - {info.tempMax}&deg;C</p>
                  <p>Minimum Temperature - {info.tempMin}&deg;C</p>
                  <p>Humidity - {info.humidity}g.m-3</p>
                  <p>Feels Like - {info.feelsLike}&deg;C</p>
                </i>
              </b>
              <p>
                The Weather can be described as{" "}
                <b>
                  <i>{info.weather}</i>
                </b>{" "}
                and feels like <b>{info.feelsLike}&deg;C</b>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
