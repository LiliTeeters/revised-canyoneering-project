import { useParams } from "react-router-dom";
import  CanyoneeringAPI  from '../api/CanyoneeringAPI';
import { useEffect, useState } from 'react';
import FavoriteCanyons from "../components/FavoriteCanyons";

const FavoritesPage = (props) => {
    const [canyon, setCanyon] = useState([])
    const params = useParams()


    useEffect(() => {
        const getUser = async () => {
            const data = await CanyoneeringAPI.getLoggedInUser(params.userID)
            console.log(data)

            const canyon = []
            
             for (let i of data) {
                 const canyonObj = await CanyoneeringAPI.fetchCanyonByID(i)
                 canyon.push(canyonObj)
             }
             setCanyon(canyon)
             console.log("canyons", setCanyon)
        }
        getUser()
    },[params.userID])

    return (
        <div>
            <h1> Favorites </h1>
        
            <FavoriteCanyons canyons={canyon}/>
            <h3>Name: {canyon.canyon_name}</h3>
                <p>Rating: {canyon.rating}</p>
                <p>Length: {canyon.length}</p>

        </div>
    )
}
export default FavoritesPage