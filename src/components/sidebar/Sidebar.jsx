import React, {memo} from "react";
import styles from "./Sidebar.module.css";

const Sidebar = memo(() => {
  return (
    <div className={styles.sidebarItem}>
      <ul>
        <li>Click Speed Test</li>
        <li>What is CPS?</li>
        <li>About</li>
      </ul>
    </div>
  );
});

export default Sidebar;
