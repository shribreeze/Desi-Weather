import React from 'react'
import { useState, useEffect } from 'react';

const CurrWeather = () => {

    const  key = process.env.API_KEY;

    const data = [  
        {  
           "wind_cdir":"NE",
           "rh":59,
           "pod":"d",
           "lon":-78.63861,
           "pres":1006.6,
           "timezone":"America\/New_York",
           "ob_time":"2017-08-28 16:45",
           "country_code":"US",
           "clouds":75,
           "vis":10,
           "wind_spd":6.17,
           "gust": 8,
           "wind_cdir_full":"northeast",
           "app_temp":24.25,
           "state_code":"NC",
           "ts":1503936000,
           "h_angle":0,
           "dewpt":15.65,
           "weather":{  
              "icon":"c03d",
              "code": 803,
              "description":"Broken clouds"
           },
           "uv":2,
           "aqi":45,
           "station":"CMVN7",
           "sources": ["rtma", "CMVN7"],
           "wind_dir":50,
           "elev_angle":63,
           "datetime":"2017-08-28:17",
           "precip":0,
           "ghi":444.4,
           "dni":500,
           "dhi":120,
           "solar_rad":350,
           "city_name":"Raleigh",
           "sunrise":"10:44",
           "sunset":"23:47",
           "temp":24.19,
           "lat":35.7721,
           "slp":1022.2
        }
     ]

    const [Data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=1a1f3b0675834561a135b02ee422d6f2&include=minutely').then((res) => {
            return res.json();
          }).then((data) => {
            console.log(data);
            setData(data);
          });
      }, []);

    //   const cityName = data[0]?.city_name;
      const CurData = data[0];


  return (
    <>
    <section className="vh-100" style={{backgroundColor: "#cdc4f9"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-12 col-xl-10">

        <div className="card shadow-0 border border-dark border-5 text-dark" style={{borderRadius: "10px"}}>
          <div className="card-body p-4">

            <div className="row text-center">
              <div className="col-md-9 text-center border-end border-5 border-dark py-4"
                style={{marginTop: "-1.5rem", marginBottom: "-1.5rem"}}>
                <div className="d-flex justify-content-around mt-3">
                  <p className="small">{CurData.city_name}</p>
                  <p className="small">{CurData.datetime}</p>
                  <p className="small">Rain map</p>
                </div>
                <div className="d-flex justify-content-around align-items-center py-5 my-4">
                  <p className="fw-bold mb-0" style={{fontSize: "7rem"}}>-4°C</p>
                  <div className="text-start">
                    <p className="small">10:00</p>
                    <p className="h3 mb-3">Sunday</p>
                    <p className="small mb-0">Cloudy</p>
                  </div>
                </div>
                <div className="d-flex justify-content-around align-items-center mb-3">
                  <div className="flex-column">
                    <i className="fas fa-minus"></i>
                  </div>
                  <div className="flex-column border" style={{borderRadius: "10px", padding: ".75rem"}}>
                    <p className="small mb-1">Sun</p>
                    <p className="small mb-0"><strong>{CurData.temp}</strong></p>
                  </div>
                  <div className="flex-column">
                    <p className="small mb-1">Mon</p>
                    <p className="small mb-0"><strong>-4°C</strong></p>
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
              </div>
              <div className="col-md-3 text-end">
                <p className="small mt-3 mb-5 pb-5">For a month</p>
                <p className="pb-1"><span className="pe-2">11:00</span> <strong>-4°</strong></p>
                <p className="pb-1"><span className="pe-2">12:00</span> <strong>-4°</strong></p>
                <p className="pb-1"><span className="pe-2">13:00</span> <strong>-5°</strong></p>
                <p className="pb-1"><span className="pe-2">14:00</span> <strong>-7°</strong></p>
                <p className="pb-1"><span className="pe-2">15:00</span> <strong>-6°</strong></p>
                <p className="pb-1"><span className="pe-2">16:00</span> <strong>-4°</strong></p>
                <p><span className="pe-2">17:00</span> <strong>-3°</strong></p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>


<input type="hidden" name="client_ip" value="45.248.159.10"/>
                                         <input name="_csrf_token" type="hidden" value="Ijg0NmYwMzBlYzAyMzc0ZjU3MjJmM2MyMTA0MzIyZjU1N2QzMjFmMzEi.Zm4BtA.6uZAHOqZugUFHA2xoaHkmOgL7p8"/>

                                         <div class="location">

                                            <span data-api="location">Mohali, IN</span>

                                         </div>

                                         <div class="main_left">

                                            <i data-api="current_icon" class="night"></i>
                                            <span data-api="current_main_descr">Clear Sky</span>

                                         </div>

                                         <div class="main_right">

                                            <span data-api="current_wind_speed" class="wind">Wind: 3 m/s</span>
                                            <span data-api="current_precip" class="precip">Precip: 0 mm/hr</span>
                                            <span data-api="current_snow" class="snow"></span>
                                            <span data-api="current_pressure" class="pressure">Pressure: 988 mb</span>
                                            <div class="hidden-temp">Temperature:</div><span data-api="current_temperature" class="temperature">33°C</span>

                                         </div>

                                         <div data-api="forecast_week" class="week"><div class="day dn0"><span class="name">MON</span><i class="full_sun"></i><span class="temperature">45 °C / 31 °C</span></div><div class="day dn1"><span class="name">TUE</span><i class="full_sun"></i><span class="temperature">46 °C / 32 °C</span></div><div class="day dn2"><span class="name">WED</span><i class="full_sun"></i><span class="temperature">46 °C / 32 °C</span></div><div class="day dn3"><span class="name">THU</span><i class="partly_cloudy"></i><span class="temperature">45 °C / 26 °C</span></div><div class="day dn4"><span class="name">FRI</span><i class="thunder"></i><span class="temperature">43 °C / 32 °C</span></div><div class="day dn5"><span class="name">SAT</span><i class="partly_cloudy"></i><span class="temperature">44 °C / 33 °C</span></div></div>

    </>
  )
}

export default CurrWeather