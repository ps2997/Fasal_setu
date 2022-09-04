import React, { useEffect, useState } from 'react'
import "../styles/pages/Weather.css";
import weatherbg from "../assets/WeatherBG.png";
import { BsCloudSun, BsFillCloudDrizzleFill, BsWind } from "react-icons/bs";
import { motion } from "framer-motion";
import { FiSun } from "react-icons/fi";

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
        console.log(data);
        setLoad(false);
      });
      // eslint-disable-next-line
  }, [])

  console.log(data)

  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.25}}
      className="weatherBody">
      {load ? (
        <FiSun className='weatherLoad' />
      ) : (
        <div>
          <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.25, duration: 0.5}}
            className="weatherbg"
          >
            <img src={weatherbg} alt="weather bg" />
          </motion.div>

          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.75, duration: 0.5}}
            className="weatherTitle"
          >
            <h1>Weather</h1>
            <h2>Forecast</h2>
          </motion.div>

          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1, duration: 0.5}}
            className="weatherBox box1"
          >
            <div className="currentTemp">
              <p>{data.location.name}</p>
              <BsCloudSun className="cloud" />
              <h1>{data.current.temp_c}°C</h1>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1, duration: 0.5}}
            className="weatherBox box2"
          >
            <div className="currentTemp">
              <BsWind className="cloud wind" />
              <h1>
                {data.current.wind_kph} Kph {data.current.wind_dir}
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1, duration: 0.5}}
            className='weatherBox box3'
          >
            <div className="currentTemp">
              <BsFillCloudDrizzleFill className="cloud drizzle" />
              <h1>{data.current.humidity}%</h1>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

export default Weather