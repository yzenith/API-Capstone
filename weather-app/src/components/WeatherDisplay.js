import React from "react";

const WeatherDisplay = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>
        City: {data.name} - {data.sys.country}
      </h3>
      \
      <span>
        Latitue: {data.coord.lat}; Longitude: {data.coord.lon}
      </span>
      <div>
        <h4>Weather</h4>
        <p>{data.weather[0].main} </p>
        <p>{data.weather[0].description} </p>
        <span>{data.weather[0].icon} </span>
        <h4>details</h4>
        <span>{data.main.temp} - </span>
        <span>{data.main.feels_like} - </span>
        <span>{data.main.temp_min} - </span>
        <span>{data.main.temp_max} - </span>
        <span>{data.main.pressure} - </span>
        <span>{data.main.humidity}</span>
        <h4>Visibility</h4>
        <span>{data.visibility}</span>
        <h4>Wind</h4>
        <span>{data.wind.speed} - </span>
        <span>{data.wind.deg} - </span>
        <h4>Sunrise/Sunset</h4>
        <span>{data.sys.sunrise} - </span>
        <span>{data.sys.sunset} - </span>
      </div>
    </div>
  );
};

export default WeatherDisplay;
