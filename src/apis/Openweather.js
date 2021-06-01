import Axios from "axios";
const KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default Axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    q: "plano",
    type: "accurate",
    lang: "en",
    APPID: KEY,
    cnt: 7,
    units: "imperial",
  },
});
