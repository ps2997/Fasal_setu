import React, { useEffect, useState } from 'react'
import { TiWeatherPartlySunny, TiWeatherWindy } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import "../styles/pages/Weather.css";

const Weather = () => {

  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8544cc78fdmshb1b579b1fd047a2p125e00jsn235ed8d1d0f3",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(
      "https://weatherapi-com.p.rapidapi.com/current.json?q=Chennai",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data)
        setLoad(false);
      });
      // eslint-disable-next-line
  }, [])

  console.log(data)

  return (
    <div>
      {load ? (
        <h1>Load</h1>
      ) : (
        <div className="weatherSubBody">

          <div className='weatherHeading'>
            <h1>
              Weather Reports
            </h1>
            <p>Get information about the current weather reports and plan your day accordingly.</p>
          </div>

          <div className='weatherBox'>

            <div className='weatherOne'>
              <div className="weather">
                <p>{data.current.condition.text}</p>
              </div>

              <div className="weather">
                <TiWeatherPartlySunny className="weatherIcon" />
                <p>{data.current.temp_c}</p>
              </div>

              <div className="weather">
                <TiWeatherWindy className="weatherIcon" />
                <p>
                  {data.current.wind_kph} {data.current.wind_dir}
                </p>
              </div>

              <div className="weather">
                <WiHumidity className="weatherIcon" />
                <p>{data.current.humidity}</p>
              </div>
            </div>

            <div className='weatherTwo'>
            
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather