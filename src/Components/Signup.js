import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Input from "../Parts/Input";
import './css/Signup.css'

const Signup = () => {
  const name = useRef();
  const email = useRef();
  const userName = useRef();
  const password = useRef();
  const repassword = useRef();
  const date = useRef();

  const handleSubmit = (e)=>{
    e.preventDefault();
    
  }

  return (
    <main className="Signup">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <Input
          ContainerClass="FullName"
          label="Name"
          type="text"
          id="Name"
          className="Name"
          name="Name"
          ref={name}
        />
        <Input
          ContainerClass="Email"
          label="Email"
          type="email"
          id="email"
          className="emailInput"
          name="email"
          ref={email}
        />
        <Input
          ContainerClass="username"
          label="Username"
          type="text"
          id="username"
          className="usernameInput"
          name="username"
          ref={userName}
        />
        <Input
          ContainerClass="Password"
          label="Password"
          type="text"
          id="password"
          className="passwordInput"
          name="password"
          ref={password}
        />
        <Input
          ContainerClass="repassword"
          label="Re-Password"
          type="text"
          id="repassword"
          className="repasswordInput"
          name="repassword"
          ref={repassword}
        />
        <Input
          ContainerClass="DateContainer"
          label="Date of birth"
          type="date"
          id="userDate"
          className="InputDate"
          name="date"
          ref={date}
          min={`01/01/1960`}
          max={`01/01/2016`}
        />
        <button 
        type="submit"
        >
            Sign Up
        </button>
        <p>Already have an Account?<Link to="/login">Login</Link></p>
      </form>
    </main>
  );
};

export default Signup;
