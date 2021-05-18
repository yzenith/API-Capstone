import React from "react";

const WeatherDisplay = ({ data, errorMessage }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ui grid container">
      <div className="ui sixteen wide column center aligned">
        <i class="location arrow icon"></i>
        <span className="">
          {data.name}, {data.sys.country}
        </span>
      </div>
      <div className="four wide column">
        Latitue: {data.coord.lat}; Longitude: {data.coord.lon}
      </div>
      <div className="ui column">
        Weather
        <div className="three wide column">{data.weather[0].main} </div>
        <div className="three wide column">{data.weather[0].description} </div>
        <div className="three wide column">{data.weather[0].icon} </div>
      </div>
      <div className="ui column">
        details
        <div className="two wide column">{data.main.temp} </div>
        <div className="two wide column">{data.main.feels_like} </div>
        <div className="two wide column">{data.main.temp_min} </div>
        <div className="two wide column">{data.main.temp_max} </div>
        <div className="two wide column">{data.main.pressure} </div>
        <div className="two wide column">{data.main.humidity} </div>
      </div>
      <div className="four wide column">{data.visibility}</div>
      <div className="four wide column">
        {data.wind.speed} - {data.wind.deg}
      </div>
      <div className="four wide column">
        {data.sys.sunrise} - {data.sys.sunset}
      </div>
    </div>
  );
};

export default WeatherDisplay;
