
import React , { useState } from 'react';
import './App.css';



const api ={
  key:"4ca5e2f3d1cc8cd593a61d77d3786d71",
  base :"https://api.openweathermap.org/data/2.5/"
};
function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [img, setting] = useState('');
  const [disc, setdisc] = useState("");

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setting(
            `http://openweathermap.org/img/wn/${result.weather[0].icon}.png`
          );
          setdisc(result.weather[0].description);
          setWeather(result);
          setQuery('');
          
          console.log(result);
        });
    }
  }
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date();
  date = date.toLocaleDateString("en-US", options);

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 20) ? 'App warm' : 'App') : 'App'}>
    
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Enter City..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{date}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
            <p>
            Min <br />
            {`${Math.floor(weather.main.temp_min - 273.15)}° C`}
          </p>
          <p>
              {Math.round(weather.main.temp)}°c
              </p>
              <p>
            Max <br />
            {`${Math.floor(weather.main.temp_max - 273.15)}° C`}
          </p>
            </div>
            <div className="weather">{disc}</div>
            <img src={img} alt="weather icon" className="imgcss" />
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
