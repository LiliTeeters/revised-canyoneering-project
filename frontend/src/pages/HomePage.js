import CanyonCard from "../components/CanyonCard"
import { Link } from "react-router-dom"
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext.js';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import { useState, useEffect } from "react";
import  CanyoneeringAPI  from '../api/CanyoneeringAPI';


function Map() {
  return (
    <GoogleMap defaultZoom={7} defaultCenter={{ lat: 39.320980, lng: -111.093735 }} />
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

function HomePage(props) {
  const { isLoggedIn, handleLogout } = props;
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const [canyons, setCanyons] = useState([]);
  const API_KEY = process.env.REACT_APP_MAPS_API;


  useEffect(() => {
    const getCanyons = async() => {
    await CanyoneeringAPI.fetchCanyons().then((data) => setCanyons(data))
    }
    getCanyons()
  },[])


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
          <div> <button onClick={handleLogout}>Logout</button></div>
      }


      <h1>Home Page</h1>
      {
        user &&
        <div>
          Welcome {user.username}
        </div>
      }
     
      <div className='homePage'>
        {canyons[0] && canyons.map((el, ind) => {
          return (
            <CanyonCard el={el} key={ind} />
          )
        })}
      </div>
      <br></br>
        <div><Link to='/addcanyon'>Add Canyon</Link></div>
        <br></br>
        <br></br>


      <div style={{ width: '100vw', height: "100vh" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.46&libraries=geometry,drawing,places&key=${API_KEY}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>

    </div>
  )
}

export default HomePage