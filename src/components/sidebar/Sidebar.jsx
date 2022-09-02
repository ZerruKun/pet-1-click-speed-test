import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "../../styles/Sidebar.module.css"

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
    <nav className={styles.general}>
      {console.log("отрендерился Sidebar")}
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
