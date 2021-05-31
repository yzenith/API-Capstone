import React from "react";
import Header from "./Header";
import openWeather from "../apis/Openweather";
import WeatherDisplay from "./WeatherDisplay";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {
  state = {
    weatherData: {},
    errorMessage: null,
    unit: "imperial",
    currentSearch: "",
  };

  componentDidMount() {
    // when application loading
    this.fetchWeather("dallas");
  }

  selectedUnit = (selectedUnit) => {
    this.setState({ unit: selectedUnit });
    console.log(this.state.unit);
    console.log(this.state.currentSearch);
    this.fetchWeather(this.state.currentSearch);
  };

  fetchWeather = async (passedTerm) => {
    this.setState({ currentSearch: passedTerm });
    const { data } = await openWeather.get("/", {
      params: {
        q: passedTerm,
        type: "accurate",
        lang: "en",
        APPID: API_KEY,
        cnt: 7,
        units: this.state.unit,
      },
    });

    this.setState({
      weatherJSON: data,
    });

    console.log(
      `passed term is: ${passedTerm} and currentTerm is ${this.state.currentSearch}`
    );
    console.log(this.state.weatherJSON);
  };

  render() {
    return (
      <div className="ui segments">
        {/* // have issue onUpSubmit should pass */}
        <Header onUpSubmit={this.fetchWeather} />
        <WeatherDisplay
          data={this.state.weatherJSON}
          selectedUnit={this.selectedUnit}
        />
      </div>
    );
  }
}

export default App;
