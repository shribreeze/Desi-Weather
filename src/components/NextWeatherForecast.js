import React from 'react'
import { useState, useEffect } from 'react';

const NextWeatherForecast = () => {

    const [weatherForecast, setWeatherForecast] = useState([]);
    const [error, setError] = useState(null);

    const apiKey = '1a1f3b0675834561a135b02ee422d6f2';

    const fetchWeatherForecast = (lat, lon) => {
        const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${apiKey}&units=M&days=7`;
        console.log('Fetching weather forecast data from URL:', url);
        fetch(url, {
          method: 'GET',
              headers: {
                  'Accept': 'application/json'
              }
        })
            .then(response => response.json())
            .then(data => {
                if (data && data.data && data.data.length > 0) {
                    setWeatherForecast(data.data[0]);
                } else {
                    setError('No weather forecast data available.');
                }
            })
            .catch(error => {
                console.error('Error fetching weather forecast data:', error);
                setError('Error fetching weather forecast data.');
            });
      };
      
      
      const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    fetchWeatherForecast(lat, lon);
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
        <h1>this is weather forecast.</h1>
        <div className="d-flex justify-content-around align-items-center mb-3">
                  <div className="flex-column">
                    <i className="fas fa-minus"></i>
                  </div>
                  <div className="flex-column border" style={{borderRadius: "10px", padding: ".75rem"}}>
                    <p className="small mb-1">{weatherForecast.valid_date}</p>
                    <p className="small mb-0"><strong>{weatherForecast.temp}</strong></p>
                  </div>
                  <div className="flex-column">
                    <p className="small mb-1">{weatherForecast.valid_date}</p>
                    <p className="small mb-0"><strong>{weatherForecast.temp}</strong></p>
                  </div>
                  <div className="flex-column">
                    <p className="small mb-1">Tue</p>
                    <p className="small mb-0"><strong>-4°C</strong></p>
                  </div>
                  <div className="flex-column">
                    <p className="small mb-1">Wed</p>
                    <p className="small mb-0"><strong>-4°C</strong></p>
                  </div>
                  <div className="flex-column">
                    <p className="small mb-1">Thu</p>
                    <p className="small mb-0"><strong>-4°C</strong></p>
                  </div>
                  <div className="flex-column">
                    <p className="small mb-1">Fri</p>
                    <p className="small mb-0"><strong>-4°C</strong></p>
                  </div>
                  <div className="flex-column">
                    <p className="small mb-1">Sat</p>
                    <p className="small mb-0"><strong>-4°C</strong></p>
                  </div>
                  <div className="flex-column">
                    <i className="fas fa-minus"></i>
                  </div>
                </div>
    </>
  )
}

export default NextWeatherForecast