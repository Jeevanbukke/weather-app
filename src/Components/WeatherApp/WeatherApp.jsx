import React, { useState }  from "react";
import './WeatherApp.css'
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';


const WeatherApp = () => {
   
    let api_key="c8614c4dbd7799900d83619d08b9296e";
     
    const[wicon,setWicon]=useState(cloud_icon)

     const search = async() => {
        const element=document.getElementsByClassName("cityinput");
        if(element[0].value===" ")
        {
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response= await fetch(url);
        let data= await response.json();
        const humidity=document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("Wind-Speed");
        const temperature = document.getElementsByClassName("weather-temp");
        const location=document.getElementsByClassName ("weather-location");
        const temp_min=document.getElementsByClassName("temp_min");
        const temp_max=document.getElementsByClassName("temp_max");

        humidity[0].innerHTML=data.main.humidity+"%";
        wind[0].innerHTML=data.wind.speed+"km/h";
        temperature[0].innerHTML=data.main.temp+"°C";
        location[0].innerHTML=data.name;
        temp_min[0].innerHTML="Min-Temp :"+data.main.temp_min+"°C";
        temp_max[0].innerHTML="Max-Temp :"+data.main.temp_max+"°C";

        if(data.weather[0].icon==="01d"  ||  data.weather[0].icon==="01n")
        {
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon==="02d"  ||  data.weather[0].icon==="02n")
        {
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon==="03d"  ||  data.weather[0].icon==="03n")
        {
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="04d"  ||  data.weather[0].icon==="04n")
        {
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="09d"  ||  data.weather[0].icon==="09n")
        {
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="10d"  ||  data.weather[0].icon==="10n")
        {
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="13d"  ||  data.weather[0].icon==="13n")
        {
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }


     }

    return (
        <div className="container" >
            <div className="top-bar">
                <input type="text" className="cityinput" placeholder="search"/>
                 <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt=""/>
                 </div>

            </div>
            <div className="weather-image">
                <img src={wicon} alt="" />

            </div>
            <div className="weather-temp">26°C</div>
            <div className="weather-location">New York</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon"/>
                    <div className="data">
                     <div className="humidity-percent">70%</div>
                     <div className="text">Humidity</div>   
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon"/>
                    <div className="data">
                     <div className="Wind-Speed">20 km/h</div>
                     <div className="text">Wind Speed</div>   
                    </div>
                </div>
            </div>
            <div className="tempinfo">
              <div className="temp_min">Temp-min:20°C</div>
              <div className="temp_max">Temp-max:40°C</div>
            </div>
         </div>
    )
}

export default WeatherApp