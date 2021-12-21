import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  CanyoneeringAPI  from '../api/CanyoneeringAPI';

const SignupPage = (props) => {
  let navigate = useNavigate();

  const handleSignup = async (evt) => {
    evt.preventDefault();
    let userObject = {
      'username': evt.target.username.value,
      'password': evt.target.pass.value,
    }
    let response = await CanyoneeringAPI.signupUser(userObject);
    let data = await response.json();
    if (data.error) {
      console.log('there was an error signing up');
    } else {
      navigate('/login');
    }

  }

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSignup}>
        <label>UserName:</label>
        <input type='text' placeholder='username' name='username' />
        <label>Password:</label>
        <input type='password' name='pass' />
        <button type='submit' >Sign Up</button>
      </form>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default SignupPage;