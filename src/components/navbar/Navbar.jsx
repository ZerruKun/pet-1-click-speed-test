import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "../../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.general}>
      {console.log("отрендерился Sidebar")}
      <div className={styles.link}>
        <NavLink className={({ isActive }) =>
          isActive ? styles.activeLink : styles.notActiveLink
        } to="/">
          Тест скорости клика
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink className={({ isActive }) =>
          isActive ? styles.activeLink : styles.notActiveLink
        } to="/aboutcps">
          О скорости клика
        </NavLink>
      </div>
      <NavLink className={({ isActive }) =>
          isActive ? styles.activeLink : styles.notActiveLink
        } to="/abouttechnics">
          О техниках клика
      </NavLink>
    </nav>
  )
}

export default Navbar
