import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import CanyoneeringAPI from "../api/CanyoneeringAPI"

function UserLoginPage(props) {
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
      <h2>Login User</h2>
      <hr />
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="username" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control placeholder="password" />
        </Form.Group>
        <br />
        <Button type="submit">
          Login
        </Button>  
      </Form>  
    </div>
  )
}

export default UserLoginPage