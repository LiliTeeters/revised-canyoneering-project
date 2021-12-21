import CanyonCard from "../components/CanyonCard"
import { Link } from "react-router-dom"
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext.js';

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
        
        </div>
    )
}

export default HomePage