import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const CanyonCard = (props) => {
    const {el} = props
    const navigate = useNavigate()

const canyonPage = () => {
    console.log(el)
    navigate(`/canyons/${el.id}`)
}

    return(
        <div className='canyonCard'>
            <img src={'https://www.roadtripryan.com/go/tripimage/maxwidth?size=222&id=0pzP'} alt="" />

            <h1>{el.canyon_name}</h1>
            <h2>{el.length}</h2>
            <h2>{el.rating}</h2>
            <button onClick={canyonPage}>View</button>

            {/* LINK example */}
            <Link to={`/canyons/${el.id}`}>ViewLink</Link>
            
        </div>
    )
}

export default CanyonCard