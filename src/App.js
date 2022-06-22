import React from "react";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.headerItem}>header</div>
      <div className={styles.sidebarItem}>sidebar</div>
      <div className={styles.mainItem}>main</div>
      <div className={styles.footerItem}>footer</div>
    </div>
  );
}

export default App;
