import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "../../styles/Sidebar.module.css"

const Sidebar = () => {

  // const linkStyle = ({ isActive }) => {
  //   return {
  //     color: isActive ? "#6929af" : "#dfe6f2",
  //     fontWeight: isActive ? "bold" : "normal",
  //     textDecoration: isActive ? "underline" : "none",
  //     pointerEvents: isActive ? "none" : "",
  //     userSelect: isActive ? "none" : "",
  //     display: "block",
  //     marginBottom: "5px",
  //   };
  // };

  return (
    <nav className={styles.general}>
      {console.log("отрендерился Sidebar")}
      <NavLink className={({ isActive }) =>
        isActive ? styles.activeLink : styles.notActiveLink
      } to="/">
        Тест скорости клика
      </NavLink>
      <NavLink className={({ isActive }) =>
        isActive ? styles.activeLink : styles.notActiveLink
      } to="/about">
        О скорости клика
      </NavLink>
    </nav>
  )
}

export default Sidebar
