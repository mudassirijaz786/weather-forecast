import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


// get your api from http://openweathermap.org/
const API_KEY = "ff049a20877f87ec60387a3cfc3a8141";

class App extends React.Component {
  state = {
    icon: "",
    degree: "C",
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`).then(function(response) {
      if (response.ok) {
        return response.json();
      }
      console.log("Can't fetching weather.")
    });

    // weather icon must be fetched from a http server. i don't know why but don't work in localhost.
    const weather_icon = await fetch(`https://gist.githubusercontent.com/tbranyen/62d974681dea8ee0caa1/raw/3405bfb2a76b7cbd90fde33d8536f0cd13706955/icons.json`).then(function(response) {
      if (response.ok) {
        return response.json();
      }
      console.log("Can't fetching IconJSON")
    });

    // Fetch weather icon "id" from API
    const iconCode = api_call.weather[0].id;
    // Then go to icons.json file and look for icon class
    const iconWeather = weather_icon[iconCode].icon;

    if (city && country && api_call) {
      this.setState({
        icon: iconWeather,
        temperature: api_call.main.temp,
        city: api_call.name,
        country: api_call.sys.country,
        humidity: api_call.main.humidity,
        description: api_call.weather[0].main,
        error: "",
      });
    } else if (city) {
      this.setState({
        icon: "",
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Invalid country."
      })
    } else if (country) {
      this.setState({
        icon: "",
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Invalid city."
      })
    } else {
      this.setState({
        icon: "",
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Inputs are empty."
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 title-container">
              <Titles />
            </div>
            <div className="col-lg-7 col-12 form-container">
              <Form getWeather={this.getWeather} />
              <Weather icon={this.state.icon} degree={this.state.degree} temperature={this.state.temperature} city={this.state.city} country={this.state.country} humidity={this.state.humidity}
                description={this.state.description} error={this.state.error} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
