import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "../../styles/Sidebar.module.css"

const Sidebar = () => {
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
