import {Table} from "react-bootstrap"
import { Link } from "react-router-dom"

const FavoriteCanyonList= (props) => {

    const listFavoriteCanyons = () => {
        if (!props.Canyon_Details)
            return null
        return props.Canyon_Details.map((canyon, index) => {
            return(
                <tr key={index}>
                    <td><Link to={`${canyon.id}/usercanyons/`}> {canyon.canyon_name}</Link></td>
                </tr>
            )
        })
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th> Canyon</th>
                    </tr>
                </thead>
                <tbody>
                    { listFavoriteCanyons()}
                </tbody>
            </Table>
            

        </div>
    )
}

export default FavoriteCanyonList