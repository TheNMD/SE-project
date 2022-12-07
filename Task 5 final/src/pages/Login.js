import React from "react";
import NavBar from "../components/NavBar";
import "./Login.css";
import logoBKU from "../assets/logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="background">
      <form>
        <div className="control-group">
          <img src={logoBKU}></img>
          <div className="container">
            <div className="form-control">
              <div>Employee id</div>
              <input type="text" id="name" placeholder="Ex: 2075923" />
            </div>
            <div className="form-control">
              <div>Password</div>
              <input type="password" id="name" placeholder="Ex: MyPasswordStrong" />
            </div>
            <div className="form-actions">
              <Link to='/home'><button >Login</button></Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
