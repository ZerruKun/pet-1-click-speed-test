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
          <li>Click Speed Test</li>
        </NavLink>
        <NavLink style={navLinkStyles} to="/whatiscps">
          <li>What is CPS?</li>
        </NavLink>
        <NavLink style={navLinkStyles} to="/about">
          <li>About</li>
        </NavLink>
      </ul>
    </div>
  );
});

export default Sidebar;
