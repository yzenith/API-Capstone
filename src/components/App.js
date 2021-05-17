import React from "react";
import Header from "./Header";
import openWeather from "../apis/Openweather";
import WeatherDisplay from "./WeatherDisplay";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {
  state = { weatherData: {}, errorMessage: "" };

  componentDidMount() {
    // when application loading
    this.fetchWeather("dallas");
  }

  fetchWeather = async (passedTerm) => {
    const { data } = await openWeather.get("/", {
      params: {
        q: passedTerm,
        type: "accurate",
        lang: "en",
        APPID: API_KEY,
        cnt: 7,
        units: "imperial",
      },
    });

    this.setState({
      weatherJSON: data,
    });

    console.log(`passed term is: ${passedTerm}`);
    console.log(this.state.weatherJSON);
  };

  render() {
    return (
      <div className="ui container">
        <Header onUpSubmit={this.fetchWeather} />
        <WeatherDisplay
          data={this.state.weatherJSON}
          error={this.state.errorMessage}
        />
      </div>
    );
  }
}

export default App;
