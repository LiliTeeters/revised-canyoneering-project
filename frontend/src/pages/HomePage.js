import CanyonCard from "../components/CanyonCard"
import { Link } from "react-router-dom"
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext.js';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import { useState, useEffect } from "react";
import CanyoneeringAPI from '../api/CanyoneeringAPI';


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
    const getCanyons = async () => {
      await CanyoneeringAPI.fetchCanyons().then((data) => setCanyons(data))
    }
    getCanyons()
  }, [])


  return (
    <div>
       <h2>Canyoneering Adventures</h2>
      {
        !isLoggedIn
          ?
          <div className="loginSignupNav">
            <div className="loginLink">
              <Link to='/login' style={{textDecoration:"none", color: "black"}}>Login</Link>
            </div>
            <div className="signupLink">
              <Link to='/signup' style={{textDecoration:"none", color: "black"}}>Signup</Link>
            </div>
          </div>
          :
          <div className="logoutAddCanyonNav">
            {/* <h2>Canyoneering Adventures</h2> */}
            <div className="addCanyonLink">
              <Link to='/addcanyon' style={{textDecoration:"none", color: "black"}}>Add Canyon</Link>
            </div>
            <div className="logoutButton">
              <button style={{outline: "none"}} onClick={handleLogout}  >Logout</button>
            </div>
            
          </div>
      }


      {/* <h1>Home Page</h1> */}
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
      <br></br>
      <br></br>


      <div style={{ width: '80vw', height: "80vh", marginLeft: "auto", marginRight: "auto" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.46&libraries=geometry,drawing,places&key=${API_KEY}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
      <br /><br />
      <br />
    </div>
  )
}

export default HomePage