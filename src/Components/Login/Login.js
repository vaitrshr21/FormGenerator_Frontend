import React from "react";
import "./Login.css";
import handleLogin from "../Auth/HandleLogin";
import { useNavigate } from "react-router-dom";


const Login = (props) => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    //validation
    if (email === '' || password === '' || email === null || password === null) {
      alert("All detals are mandatory !")
    }

    else {
      const userInput = {
        email: email,
        password: password,
      };

      const accessFlag = await handleLogin(userInput);

      if (accessFlag === true) {
        //navigate to User Home Page
        props.getEmail(email)
        navigate('/user/home') 
      }
      else {
        alert("Invali Detils!")
      }
    }
  };

  return (
    <div className="login-root">
      <div className="formBuilder">
        <h1>Welcome to Form Generator!</h1>
      </div>

      <div className="loginContainer">
        <h1>Log In</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="item">
            <label className="label" htmlFor="email">
              Email&nbsp;&nbsp;&nbsp;
            </label>
            <input
              className="item1"
              type="text"
              name="email"
              id="email"
              autoComplete="off"
            ></input>
          </div>

          <div className="item">
            <label className="label" htmlFor="password">
              Password&nbsp;&nbsp;&nbsp;
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
            ></input>
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
          <div className="item">
            <span>
              <button onClick={() => { navigate('/forgotPassword') }}>Forgot Password?</button>
            </span>
          </div>
        </form>
        <div className="item">
          <span>
            Don't have an account?<button onClick={() => { navigate('/signup') }}>Sign up</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
