import React from 'react'
import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const linkStyle = ({ isActive }) => {
    return {
      color: isActive ? "darkblue" : "black",
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      pointerEvents: isActive ? "none" : "",
      userSelect: isActive ? "none" : "",
    };
  };

  return (
    <nav>
      {console.log("отрендерился Sidebar")}
      <h1>Я Sidebar</h1>
      <NavLink style={linkStyle} to="/">
        Тест скорости клика
      </NavLink>
      <NavLink style={linkStyle} to="/about">
        О скорости клика
      </NavLink>
    </nav>
  )
}

export default Sidebar
