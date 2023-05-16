import React from "react";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import "./App.css";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/signUp");
  }, []);
  return (
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
};

export default App;
