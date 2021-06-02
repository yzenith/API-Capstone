import React, { useState } from "react";
import "./WeatherDisplay.css";

const WeatherDisplay = ({ data, selectedUnit }) => {
  const [weatherUnit, setWeatherUnit] = useState("°F");
  const [unitJSON] = useState({ "°F": "imperial", "°C": "metric" });

  if (!data) {
    return (
      <div className="ui segment">
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <div className="ui placeholder">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    );
  }

  const weatherIcon =
    "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";

  // onclick to change the weatherUnit by button value
  const unitChange = (event) => {
    console.log(`current unit is: ${weatherUnit}`);
    console.log(`clicked target id is: ${event.target.id}`);
    if (weatherUnit !== event.target.id) {
      setWeatherUnit(event.target.id);
      console.log(`the updated unit is: ${weatherUnit}`);
      console.log(`pass up unit value as ${unitJSON[weatherUnit]}`);
      selectedUnit(unitJSON[weatherUnit]);
    }
  };

  const timestampToDatetime = (ts) => {
    console.log(`current timestamp is: ${ts}`);
    let dateTime = new Date(ts * 1000); // unix timestamp
    return dateTime.toLocaleTimeString("en-US");
  };

  const flagClassName = data.sys.country.toLowerCase() + " flag";

  return (
    <div className="ui segments">
      <div className="ui horizontal segments">
        <div className="ui center aligned segment">
          <p className="">
            <i className={flagClassName}></i>
            {data.name}, {data.sys.country}
          </p>
        </div>
        <div className="ui center aligned segment">
          <div className="ui buttons">
            <button className="ui positive button" id="°F" onClick={unitChange}>
              °F
            </button>
            <div className="or"></div>
            <button className="ui button" id="°C" onClick={unitChange}>
              °C
            </button>
          </div>
        </div>
      </div>

      <div className="ui horizontal segments">
        <div className="ui center aligned segment">
          <i className="map icon"></i>
          <span className="typeName">Latitude: </span>
          <p>{data.coord.lat}</p>
        </div>
        <div className="ui center aligned segment">
          <i className="map icon"></i>
          <span className="typeName">Longitute:</span>
          <p>{data.coord.lon}</p>
        </div>
        <div className="ui center aligned segment">
          <span className="typeName">Weather:</span>
          <p> {data.weather[0].main}</p>
        </div>
        <div className="ui middle center aligned segment">
          <span className="typeName">Weather Description: </span>
          <p>{data.weather[0].description} </p>
        </div>
      </div>

      <div className="ui center aligned segment">
        <img src={weatherIcon} alt="openweather_icon" />
      </div>

      <div className="ui horizontal segments">
        <div className="ui center aligned segment">
          <span className="typeName">Temperture: </span>
          <p>
            {data.main.temp} <span>{weatherUnit}</span>
          </p>
        </div>
        <div className="ui center aligned segment">
          <span className="typeName">Feels Like: </span>
          <p>
            {data.main.feels_like} <span>{weatherUnit}</span>
          </p>
        </div>
        <div className="ui center aligned segment">
          <span className="typeName">Min/Max:</span>
          <p>
            {data.main.temp_min} <span>{weatherUnit}</span> /{" "}
            {data.main.temp_max}
            <span>{weatherUnit}</span>
          </p>
        </div>
        <div className="ui center aligned segment">
          <span className="typeName">Pressure: </span>
          <p>{data.main.pressure} millibars</p>
        </div>
        <div className="ui center aligned segment">
          <span className="typeName">Humidity: </span>
          <p>{data.main.humidity}</p>
        </div>
        <div className="ui center aligned segment">
          <span className="typeName">Visibility:</span>
          <p> {data.visibility}</p>
        </div>
      </div>
      <div className="ui horizontal segments">
        <div className="ui center aligned segment">
          <div className="ui horizontal segments">
            <div className="ui center aligned segment">
              <span className="typeName">WindSpeed: </span>
              <p>{data.wind.speed} mph</p>
            </div>
            <div className="ui center aligned segment">
              <span className="typeName">Wind direction, degrees:</span>
              <p>{data.wind.deg}</p>
            </div>
          </div>
        </div>

        <div className="ui center aligned segment">
          <div className="ui horizontal segments">
            <div className="ui center aligned segment">
              <span className="typeName">Sunrise: </span>
              <p>{timestampToDatetime(data.sys.sunrise)}</p>
            </div>
            <div className="ui center aligned segment">
              <span className="typeName">Sunset: </span>
              <p>{timestampToDatetime(data.sys.sunset)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ui center aligned segment">
        <span className="typeName">Powered By </span>
        <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">
          Openweather API{" "}
        </a>
        ,
        <span>
          <a href="https://semantic-ui.com/">Semantic UI</a>,
        </span>
        <span>
          <a
            href="https://reactjs.org/"
            alt="Reactjs"
            rel="noreferrer"
            target="_blank"
          >
            <i className="react icon"></i>React{" "}
          </a>
          and
        </span>
        <span>
          <a
            href="https://github.com/yzenith/API-Capstone/"
            target="_blank"
            rel="noreferrer"
            alt="Github page"
          >
            {" "}
            <i className="github icon"> </i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default WeatherDisplay;
