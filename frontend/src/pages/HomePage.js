import CanyonCard from "../components/CanyonCard"
import { Link } from "react-router-dom"
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext.js';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';

// API KEY
// AIzaSyD1BNN7_egNB1BIP1tHEl_Ef5IG6qlwtaE
function HomePage(props) {
    const {canyons , isLoggedIn, handleLogout} = props
    // console.log(canyons)
    const userContext = useContext(UserContext);
    const { user } = userContext;
    // console.log(useContext)

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
          
          <iframe title="unique title" width="600" height="450"  loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD1BNN7_egNB1BIP1tHEl_Ef5IG6qlwtaE&q=Utah"/>

        </div>
        
        </div>
    )
}

export default HomePage