import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Input from "../Parts/Input";
import "./css/Login.css";

const Login = () => {
  const location = useLocation();
  const username = useRef();
  const password = useRef();
  const HandleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <main className="LoginBox">
      <form onSubmit={HandleSubmit}>
        <h1>Login</h1>
        {/*username */}
        <Input
          ContainerClass="UsernameContent"
          label="Username"
          type="text"
          id="username"
          className="username"
          name="username"
          ref={username}
        />
        {/*password */}
        <Input
          ContainerClass="PasswordContainer"
          label="Password"
          type="password"
          id="password"
          className="password"
          name="password"
          ref={password}
        />
        <button type="submit">Login</button>
        <p>
          Dont have an Account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
