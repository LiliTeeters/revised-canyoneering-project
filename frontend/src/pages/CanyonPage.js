import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CanyoneeringAPI from '../api/CanyoneeringAPI';



function CanyonPage(props) {


    const [canyon, setCanyon] = useState(null)

    // router props
    const params = useParams()

    // effects
    useEffect(() => {
        const getCanyon = async () => {
            const data = await CanyoneeringAPI.fetchCanyonByID(params.canyonID)
            if (data) {
                setCanyon(data)
            }
        }

        getCanyon()
    }, [params.canyonID])

    // render
    const renderCanyon = () => {
        if (!canyon)
            return null
        return (
            <div>
                <h3>Name: {canyon.canyon_name}</h3>
                <p>Ratin: {canyon.rating}</p>
                <p>Length: {canyon.length}</p>
                <p>Gear: {canyon.gear}</p>
                <p>Rappels: {canyon.rappels}</p>
                <p>Water: {canyon.water}</p>
                <p>Flashflood: {canyon.flashflood}</p>
                <p>Access: {canyon.access}</p>
                <p>Description: {canyon.description}</p>
            </div>
        )
    }


    return (
        <div>
            <h1>Canyon Page</h1>
            <hr />
            {renderCanyon()}
            <div>





            </div>

        </div>
    )
}


export default CanyonPage