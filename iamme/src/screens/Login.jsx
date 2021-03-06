import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from 'react-router-dom'
import Header from '../components/Header'
import Title from '../components/Title'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'

export default function Login(props) {
  const history = useHistory()
  const [formData, setFormData] = useState(
    {
      email: " ",
      password: " "
    })
  
  const { email, password } = formData;
  const { error, handleLogin } = props;

  const handleChange = (e) =>
  {
    const { name, value } = e.target;
    setFormData(prevState =>(
      {
        ...prevState,
        [name]: value
      }))
  }

  return (
    <div>
      <Header />
      <Title />
      <form id="loginForm" onSubmit={(e) =>
      {
        e.preventDefault();
        handleLogin(formData);
      }}>
        <h3>Log-In</h3>
        {
          error &&
          <p>{error}</p>
        }
        <label id="emailLabel">
          Email Address:<br></br>
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label id="passwordLabel">
          Password:<br></br>
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <br></br>
        <Link id="lBtn" to='/register'>Register</Link>
        <button id="lBtn">Log-In</button>
      </form>
      <Footer />
    </div>
  )
}
