import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Page from "./Components/Errors/NotFound";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import LandingScreen from "./Components/LandingPage/LandingScreen";
import DashBoard from "./Components/MainScreen/DashBoard";
import "./App.css";

function App() {
  const Navigate = useNavigate();
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("token"));
    setToken(getToken);
    if (token) {
      Navigate("/dashboard");
    } else {
      Navigate("/login");
    }
  }, [token]);

  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="*" element={<Page />} />
    </Routes>
  );
}

export default App;
