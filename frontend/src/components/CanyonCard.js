// import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const CanyonCard = (props) => {
    const { el } = props

    return (
        <div className='canyonCard'>
            <img src={'https://www.roadtripryan.com/go/tripimage/maxwidth?size=222&id=0pzP'} alt="" />

            <h4>{el.canyon_name}</h4>
            {/* <br /> */}
            <h5>{el.rating}</h5>
            <h5>({el.length})</h5>
            
            <br />
            <div className="canyonCardDetails">
                <Link to={`/canyons/${el.id}`} className="viewDetails" style={{textDecoration:"none"}}>View Canyon Details</Link>
            </div>


        </div>
    )
}

export default CanyonCard