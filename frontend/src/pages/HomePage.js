import CanyonCard from "../components/CanyonCard"
import { Link } from "react-router-dom"
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext.js';
// import {GoogleMap, Marker, InfoWindow} from '@react-google-maps/api';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
import { useState} from 'react';
import { render } from "react-dom";
import axios from "axios";

function WeatherApp(){
  const [temperature, setTemperature]= useState("")
  const [city, setCity]=useState("Salt Lake City")
  const [country, setCountry]= useState("US")

  const getWeatherData = (city, country) =>{
    axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=20649eeaf59d60c0cd67814901a2f463`
    }).then((response)=> {
      console.log(response.data.main.temp)
      //Kelvin to Fahrenheit conversion ℉=((K-273.15)*1.8)+32
      setTemperature(((response.data.main.temp - 273.15)*1.8) + 32)
    }).catch((error)=> {
      console.log(error)
    });
  };
  return (
    <div style={{marginLeft: "33%"}}>
      <div 
        style={{
          height: "150px",
          width: "450px",
          backgroundColor: "#94e5ff",
          display: "flex",
          justifyContent: "center", 
          alignItems: "center",
          fontSize: "25px",
        }}
        >
          <br/>
          {city} Weather
          <br/>
          {Math.round(temperature)}℉
        </div>
        <br/>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}/>
          <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}/>

          <button
            onClick={() => {
              getWeatherData(city, country);
            }}>
              GET
            </button>
            
    </div>
    
  );
};


function Map(){
  return (
  <GoogleMap defaultZoom={7} defaultCenter={{lat:39.320980, lng:-111.093735}}/>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

// API KEY
// AIzaSyD1BNN7_egNB1BIP1tHEl_Ef5IG6qlwtaE
function HomePage(props) {
    const {canyons , isLoggedIn, handleLogout} = props
    const userContext = useContext(UserContext);
    const { user } = userContext;

    return (
        <div>
           {
            !isLoggedIn
        ?
        <div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <div>
            <Link to='/signup'>Signup</Link>
          </div>
        </div>
        :
        <button onClick={handleLogout}>Logout</button>
      }
            <h1>Home Page</h1>
            {
        user &&
        <div>
          Hi {user.username}
        </div>
      }
       
        <div className='homePage'>
            {canyons[0] && canyons.map((el,ind) =>{
                return (
                    <CanyonCard el={el} key={ind}/>
                )
            })}
        </div>


        <div>
          <WeatherApp/>

        </div>

        <div style={{width:'100vw', height:"100vh"}}>
          <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.46&libraries=geometry,drawing,places&key=AIzaSyDTtSxOXNSLIj-XsUcPLWNYgcPSyoRrHck`} 
          loadingElement={<div style={{height:"100%"}}/>}
          containerElement={<div style={{height:"100%"}}/>}
          mapElement={<div style={{height: "100%"}}/>}
          />
        </div>
        
        </div>
    )
}

export default HomePage