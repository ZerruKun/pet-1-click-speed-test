import React, {memo} from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = memo(() => {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "white" : "black"
    };
  };

  return (
    <div className={styles.sidebarItem}>
      <ul className={styles.sidebarLink}>
        <NavLink style={navLinkStyles} to="/cst">
          <li>Тест скорости клика</li>
        </NavLink>
        <NavLink style={navLinkStyles} to="/whatiscps">
          <li>Что такое КПС</li>
        </NavLink>
      </ul>
    </div>
  );
});

export default Sidebar;
