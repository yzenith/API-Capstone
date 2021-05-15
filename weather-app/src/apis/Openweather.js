import Axios from "axios";
const KEY = "7fd64bea57746b38d50d97687525f21a";

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
