import React, { useState } from "react";
import { loginUser } from "../../services/users";
import "./login.css";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  }

  const handleClick = async () => {
    if (email && password) {
      const user = await loginUser(email, password);
      localStorage.setItem('token', user.token);
      if (user) {
        alert("Email and Password are correct");
        navigate(`/restaurants`);
      } else {
        alert("Email or Password are not correct! Please try again.");
      }
    }
  }
  return (
    <div className="Login">
      <div className="Login-box">
        <div className="Login-header">Login</div>
        <div className="inputs">

          <input className="email" placeholder="Enter your email" onChange={(e: any) => handleEmail(e)} />

          <input className="password" placeholder="Enter your password" type="password" onChange={(e: any) => handlePassword(e)} />
        </div>
        <div className="button">
          <button className="submit-button" onClick={handleClick}>Login</button>
        </div>
        <div className="Sign">Don't have an account?Sign up</div>
      </div>
    </div>
  )
}

export default Login
