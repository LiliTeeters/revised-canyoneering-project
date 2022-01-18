import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import CanyoneeringAPI from '../api/CanyoneeringAPI';
import { NavLink } from "react-router-dom"
// import UserContext from "../contexts/UserContext";
// import { useContext } from "react"

function AddCanyonPage(props) {

    // router props
    const navigate = useNavigate()
    // const userLoginObj = useContext(UserContext)
    // const params = useParams()

    // handlers
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const canyonData = {
            user: [1],
            canyon_name: event.target.elements[0].value,
            rating: event.target.elements[1].value,
            length: event.target.elements[2].value,
            gear: event.target.elements[3].value,
            rappels: event.target.elements[4].value,
            water: event.target.elements[5].value,
            flashflood: event.target.elements[6].value,
            access: event.target.elements[7].value,
            description: event.target.elements[8].value
        }
    
        const token = localStorage.getItem("auth-user")
        console.log("token", token)

        const data = await CanyoneeringAPI.addCanyon(canyonData, token)
        if (data) {
            navigate(`/canyons/${data.id}`)
        }
    }


    // render
    return (
        <div>
            {/* <h2>Add Canyon Page</h2>
            <br /> */}

            <div className="addCanyonForm">
            <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Canyon Name</Form.Label>
                    <Form.Control placeholder="name" />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control placeholder="rating" />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Length</Form.Label>
                    <Form.Control placeholder="length" />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Gear</Form.Label>
                    <Form.Control placeholder="gear" />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Rappels</Form.Label>
                    <Form.Control placeholder="rappels" />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Water</Form.Label>
                    <Form.Control placeholder="water" />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Flashflood</Form.Label>
                    <Form.Control placeholder="flashflood" />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Access</Form.Label>
                    <Form.Control placeholder="access" />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control placeholder="description" />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Latitude</Form.Label>
                    <Form.Control placeholder="latitude" />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Longitude</Form.Label>
                    <Form.Control placeholder="longitude" />
                </Form.Group>
                
                <br/>
                <Button type="submit">Add Canyon</Button>
            </Form>
            </div>
            <br />
            <br />
            <button><NavLink to="/">Home</NavLink></button>
            <br />
            <br />
        </div>
    )
}

export default AddCanyonPage
