import React, { useEffect, useState } from "react";
import { API_KEY } from "../Apikey";
import "./home.css";

const Home = () => {
    const [city, setCity] = useState("mumbai")
    const [data, setData] = useState({})

    const kelvinToCelsius = require('kelvin-to-celsius');
    
    
    
    useEffect(()=>{
        const fetchApi=async()=>{
            const URL = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
            const responce = await fetch(URL)
            const resJson = await responce.json();
            setData(resJson) 
        }
        fetchApi()
    },[city])
  return (
    <div className="main">
        
      <div className="box">
        <div className="Search_Div">
          <input
            type="text"
            placeholder="Search City"
            className="Search_Input"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
          />
        </div>
        <div className="Weather_Div">
            <h1>{data.main ? kelvinToCelsius(data.main.temp) : ""}°C</h1>
            <p>Min : {data.main ? kelvinToCelsius(data.main.temp_min): ""}°C / Max: {data.main ? kelvinToCelsius(data.main.temp_max): ""}°C</p>
            <h1>{city}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
