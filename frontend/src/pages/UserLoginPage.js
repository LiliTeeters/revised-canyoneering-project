import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import CanyoneeringAPI from "../api/CanyoneeringAPI"
import { Link } from 'react-router-dom'


function UserLoginPage(props) {
  const {isLoggedIn, handleLogout, handleLogin} = props

  if (isLoggedIn) {
    return <div>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <Link to='/'>Home</Link>
      </div>
    </div>
  }
  // render
  return (
    <div>
      <h2>Login User</h2>
      <hr />
      <Form onSubmit={handleLogin}>
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