import React, { useState } from "react";
import { loginUser } from "../../services/users";
import "./login.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  }

  const handleClick = async () => {
    if (email && password) {
      const user = await loginUser(email, password);
      console.log(user);

      if (user) {
        alert("Email and Password are correct");
      } else {
        alert("Email or Password are not correct! Please try again.");
      }
    }



  }
  return (
    <div className="Login">
      <div className="Login-box">
        <div className="Login-header">تسجيل الدخول</div>
        <div className="inputs">

          <input className="email" placeholder="أدخل البريد الإلكتروني" onChange={(e: any) => handleEmail(e)} />

          <input className="password" placeholder="أدخل كلمة المرور" type="password" onChange={(e: any) => handlePassword(e)} />
        </div>
        <div className="button">
          <button className="submit-button" onClick={handleClick}>تسجيل الدخول</button>
        </div>
        <div className="Sign">لا تملك حساباً؟ سجل الان!</div>
      </div>
    </div>
  )
}

export default Login