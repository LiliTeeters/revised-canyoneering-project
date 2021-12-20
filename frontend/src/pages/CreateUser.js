import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import CanyoneeringAPI from "../api/CanyoneeringAPI"

function CreateUser(props) {
  // router props
  const navigate = useNavigate()

  // handlers
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    
    const userData = {
      name: event.target.elements[0].value,
      email: event.target.elements[1].value,
    
    }

    const data = await CanyoneeringAPI.addUser(userData)
    if (data) {
      navigate(`/users/${data.id}`)
    }
  }

  // render
  return (
    <div>
      <h2>Add User Page</h2>
      <hr />
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="name" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="email" />
        </Form.Group>
        <br />
        <Button type="submit">
          Add User
        </Button>  
      </Form>  
    </div>
  )
}

export default CreateUser