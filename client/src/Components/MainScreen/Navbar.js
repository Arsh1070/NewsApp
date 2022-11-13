import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "../Images/Logo.png";

const navItems = [
  { title: "General", category: "general", key: "general_1" },
  { title: "Business", category: "business", key: "business_2" },
  { title: "Entertainment", category: "entertainment", key: "entertainment_3" },
  { title: "Sports", category: "sports", key: "sports_4" },
  { title: "Technology", category: "technology", key: "technology_5" },
  { title: "Science", category: "science", key: "science_6" },
  { title: "Health", category: "health", key: "health_7" },
];

function Navbar({ setCat }) {
  const Navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [active, setActive] = useState("general");
  const handleClick = () => setClick(!click);

  const logout = () => {
    localStorage.removeItem("token");
    Navigate("/");
  };

  const renderItems = () => {
    return navItems.map((item) => {
      return (
        <li
          key={item.key}
          onClick={() => {
            setActive(item.category);
            setCat(item.category);
          }}
          className={`list-item ${active == item.category && "active"}`}
        >
          {item.title}
        </li>
      );
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" width="50px" height="50px"></img>
        </div>
        <ul className={click ? "list-items-active" : "list-items"}>
          {renderItems()}
          <li key={"logout"} onClick={logout} className="list-item-logout">
            Logout
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
