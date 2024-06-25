import React from 'react'
import { useState, useEffect } from 'react';

const CurrWeather = () => {
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);

  // const apiKey = process.env.API_KEY;
  const apiKey = '1a1f3b0675834561a135b02ee422d6f2';

  const fetchWeather = (lat, lon) => {
      const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}&units=M`;
      console.log('Fetching weather data from URL:', url);
      fetch(url, {
        method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
      })
          .then(response => response.json())
          .then(data => {
              if (data && data.data && data.data.length > 0) {
                  setWeather(data.data[0]);
              } else {
                  setError('No weather data available.');
              }
          })
          .catch(error => {
              console.error('Error fetching weather data:', error);
              setError('Error fetching weather data.');
          });
  };

const getLocation = () => {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
              fetchWeather(lat, lon);
          },
          (error) => {
              console.error('Error getting location:', error);
              setError('Unable to retrieve location.');
          }
      );
  } else {
      setError('Geolocation is not supported by this browser.');
  }
};

useEffect(() => {
  getLocation();
}, []);



  return (
    <>
      <section className="vh-80">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-xl-8">

              <div className="card shadow-0 border border-dark border-5 text-dark" style={{borderRadius: "10px", backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(8px)'}}>
                <div className="card-body p-4">

                  <div className="row text-center">
                    <div className="col-md-9 text-center border-end border-5 border-dark py-4"
                      style={{marginTop: "-1.5rem", marginBottom: "-1.5rem"}}>
                      <div className="d-flex justify-content-around mt-3">
                        <p className="large"><strong>{weather.city_name}, {weather.country_code}</strong></p>
                        <p className="large"><strong>{weather.timezone}</strong></p>
                        <p className="large"><strong>{weather.weather && weather.weather.icon}</strong></p> 
                      </div>
                      <div className="d-flex  justify-content-around align-items-center py-5 my-4">
                        <p className="fw-bold mb-0" style={{fontSize: "7rem"}}>{weather.temp}°C</p>
                        <div className="text-start">
                          <p className="large">Feels like {weather.app_temp}°C</p>
                          <p className="h3 mb-3">{weather.ob_time}</p>
                          <p className="large mb-0">{weather.weather && weather.weather.description}</p>
                        </div>
                      </div>
                      <div className='d-flex justify-content-around'>
                      <p className="large">Sunrise: {weather.sunrise}</p>
                        <p className="large">Sunset: {weather.sunset}</p>
                      </div>
                    </div>
                    <div className="col-md-3 text-start">
                      <p className="large mt-3 mb-5 pb-5"><strong>More Info</strong></p>
                      <p className="pb-1"><span className="pe-2">Wind Speed</span> <strong>{weather.wind_spd}</strong> m/s</p>
                      <p className="pb-1"><span className="pe-2">Visibility</span> <strong>{weather.vis}</strong> km</p>
                      <p className="pb-1"><span className="pe-2">Humidity</span> <strong>{weather.rh}</strong> %</p>
                      <p className="pb-1"><span className="pe-2">Pressure</span> <strong>{weather.pres}</strong> mb</p>
                      <p className="pb-1"><span className="pe-2">UV Index</span> <strong>{weather.uv}</strong>+</p>
                      <p className="pb-1"><span className="pe-2">Cloud coverage</span> <strong>{weather.clouds}</strong> %</p>
                      <p><span className="pe-2">Part of the day</span> <strong>{weather.pod}</strong></p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CurrWeather