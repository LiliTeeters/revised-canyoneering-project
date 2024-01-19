import CanyonCard from "../components/CanyonCard"
import { Link } from "react-router-dom"
import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../contexts/UserContext.js';
import CanyoneeringAPI from '../api/CanyoneeringAPI';
import MapQuestMap from "../components/MapQuest.js";


function HomePage(props) {
  const { isLoggedIn, handleLogout } = props;
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const isAdmin = user && user.isAdmin;

  const [canyons, setCanyons] = useState([]);
  // const [geocodeResult] = useState(null);
  const [selectedCanyon, setSelectedCanyon] = useState(null);
  const API_KEY = process.env.REACT_APP_MAPQUEST_API;

  useEffect(() => {
    const getCanyons = async () => {
      const data = await CanyoneeringAPI.fetchCanyons();
      if (data) {
        setCanyons(data);
      }
    };
    getCanyons();
  }, []);


  useEffect(() => {
    if (canyons.length > 0) {
      // Example processing: Sort canyons by name
      const sortedCanyons = [canyons].sort((a, b) => a.canyon_name.localeCompare(b.canyon_name));

      // Set the first canyon as the selected canyon for display
      setSelectedCanyon(sortedCanyons[0]);
    }
  }, [canyons]);



  return (
    <div>

      {/* {!isLoggedIn ?
        <div className="loginSignupNav">
          <Link to='/login' style={{ textDecoration: "none", color: "black" }}>Login</Link>
          <br></br>
          <Link to='/signup' style={{ textDecoration: "none", color: "black" }}>Signup</Link>
        </div>
        :
        <div className="logoutAddCanyonNav">
          <Link to='/addcanyon' style={{ textDecoration: "none", color: "black" }}>Add Canyon</Link>
          <button style={{ outline: "none" }} onClick={handleLogout}>Logout</button>
        </div>
      } */}

{!isLoggedIn ?
        <div className="loginSignupNav">
          <Link to='/login' style={{ textDecoration: "none", color: "black" }}>Login</Link>
          <br></br>
          <Link to='/signup' style={{ textDecoration: "none", color: "black" }}>Signup</Link>
        </div>
        :
        <div className="logoutAddCanyonNav">
          console.log(user);
          {isAdmin && (
            
            <Link to='/addcanyon' style={{ textDecoration: "none", color: "black" }}>Add Canyon</Link>
          )}
          <button style={{ outline: "none" }} onClick={handleLogout}>Logout</button>
        </div>
      }

      <h2>Canyoneering Adventures</h2>
      {user &&
        <div>Welcome {user.username}</div>
      }

      <div className='homePage'>
        {canyons[0] && canyons.map((el, ind) => (
          <CanyonCard el={el} key={ind} />
        ))}
      </div>
      <br></br>

      <div style={{ width: '80vw', height: "70vh", marginLeft: "auto", marginRight: "auto", marginBottom: "auto" }}>

        <MapQuestMap
          apiKey={API_KEY}
          center={[39.320980, -111.093735]}
          zoom={7}
          canyons={canyons}
        />


      </div>
      <br></br>

    </div>

  );
}

export default HomePage