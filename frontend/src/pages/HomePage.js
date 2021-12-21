import CanyonCard from "../components/CanyonCard"
import { Link } from "react-router-dom"
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext.js';

function HomePage(props) {
    const {canyons} = props
    // console.log(canyons)
    const userContext = useContext(UserContext);
    const { user } = userContext;

    return (
        
        <div>
            <div>
            <Link to={"/canyons/"}>Login</Link>
            </div>
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