import React from "react";
import { Link } from "react-router-dom";
import img from "./assets/signup.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="header">
        <h1>Home Page</h1>
        <Link to="/signup">
          <button id="logoutBtn">Logout</button>
        </Link>
      </div>
      <div className="home-container">
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <h1>Hello Vanshita!</h1>
        <p>
          you are registered with the email id - vanshitashah969@gmail.com and
          phone number - 9510352737
        </p>
      </div>
    </>
  );
};

export default Home;
