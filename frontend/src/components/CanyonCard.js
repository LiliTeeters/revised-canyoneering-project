// import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import CanyoneeringAPI from '../api/CanyoneeringAPI';
import UserContext from '../contexts/UserContext.js';
import React, { useContext } from 'react';



const CanyonCard = (props) => {
    const { el } = props
    const { user, token } = useContext(UserContext); // Access user from UserContext

    // In CanyonCard or similar component
    // function addFavorite(canyonId) {
    //     CanyoneeringAPI.addFavorite(user.id, canyonId)
    //         .then(/* Handle success */)
    //         .catch(console.error);
    // }
    const addFavorite = () => {
        if (user && token) {
            CanyoneeringAPI.addFavorite(user.id, el.id, token)
                .then(response => {
                    // Handle the successful response, e.g., show a success message
                })
                .catch(error => {
                    // Handle the error, e.g., show an error message
                });
        } else {
            // Handle case when user is not logged in or token is missing
        }
    };

    return (
        <div className='canyonCard'>
            <img src={'https://www.roadtripryan.com/go/tripimage/maxwidth?size=222&id=0pzP'} alt="" />

            <h4>{el.canyon_name}</h4>
            {/* <br /> */}
            <h5>{el.rating}</h5>
            <h5>({el.length})</h5>

            <br />
            <div className="canyonCardDetails">
                <Link to={`/canyons/${el.id}`} className="viewDetails" style={{ textDecoration: "none" }}>View Canyon Details</Link>
            </div>

            <button onClick={() => addFavorite(el.id)}>Add to Favorites</button>



        </div>
    )
}

export default CanyonCard