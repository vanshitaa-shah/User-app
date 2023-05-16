import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Signup.css";
import img from "./assets/signup.png";

const Signup = () => {
  return (
    <>
      <div className="main-container">
        <div className="signup-container">
          <div className="form-container">
            <h1 id="heading">SignUp</h1>
            <form>
              <div className="form-control pofile">
                <label htmlFor="name">Photo +</label>
              </div>
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="Email" name="email" id="email" />
              </div>
              <div className="form-control">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone" />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
              </div>
              <div className="form-control">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                />
              </div>
              <Link to="/home">
                <button type="submit" className="btn" id="submitBtn">
                  Signup
                </button>
              </Link>
              <button type="reset" className="btn" id="resetBtn">
                Reset
              </button>
            </form>
          </div>
          <div className="image-container">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
