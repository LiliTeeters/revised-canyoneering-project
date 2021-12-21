import { useParams } from "react-router-dom";
import  CanyoneeringAPI  from '../api/CanyoneeringAPI';
import { useEffect, useState } from 'react';
import FavoriteCanyonList from "../components/FavoriteCanyonsCard";


const FavoritesPage = (props) => {
    const [canyon, setCanyon] = useState([])
    const params = useParams()


    useEffect(() => {
        const getUser = async () => {
            const data = await CanyoneeringAPI.fetchUserByID(params.userID)

            const canyonArray = []
             for (let i of data) {
                 const canyonObj = await CanyoneeringAPI.fetchCanyonByID(i)
                 canyonArray.push(canyonObj)
             }
             setCanyon(canyonArray)
             console.log(canyonArray)
        }
        getUser()
    },[])

    return (
        <div>
            <h1> Favorites </h1>
            {/* <FavoriteCanyonList canyons={canyon.canyon_name}/> */}
            <h3>Name: {canyon.canyon_name}</h3>
                <p>Ratin: {canyon.rating}</p>
                <p>Length: {canyon.length}</p>

        </div>
    )
}
export default FavoritesPage