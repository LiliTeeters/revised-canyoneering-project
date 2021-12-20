import { useParams } from "react-router-dom";
import  CanyoneeringAPI  from '../api/CanyoneeringAPI';
import { useEffect, useState } from 'react';
import FavoriteCanyonList from "../components/FavoriteCanyonsCard";


const FavoritesPage = (props) => {
    const [canyon, setCanyon] = useState([])
    const params = useParams()


    useEffect(() => {
        const getUser = async () => {
            const userObj = await CanyoneeringAPI.fetchUserByID(params.userID)

            const canyonArray = []
             for (let i of userObj.canyon) {
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
            <FavoriteCanyonList canyons={canyon}/>

        </div>
    )
}
export default FavoritesPage