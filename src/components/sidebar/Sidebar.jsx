import React from 'react'
import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const linkStyle = ({ isActive }) => {
    return {
      color: isActive ? "darkblue" : "black",
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav>
      {console.log("отрендерился Sidebar")}
      <h1>Я Sidebar</h1>
      <NavLink style={linkStyle} to="/">
        Тест сткорости клика
      </NavLink>
      <NavLink style={linkStyle} to="/about">
        О скорости клика
      </NavLink>
    </nav>
  )
}

export default Sidebar
