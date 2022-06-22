import React from "react";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.headerItem}>
        <h1>Wellcome to the Click Speed Test!</h1>
      </div>
      <div className={styles.sidebarItem}>
        <ul>
          <li>Click Speed Test</li>
          <li>What is CPS?</li>
          <li>About</li>
        </ul>
      </div>
      <div className={styles.mainItem}>
        {/* Пока только для первой страницы */}
        <div className={styles.cspContainer}>
          <div className={styles.timeItem1}>
            <h3>Таймер1</h3>
          </div>
          <div className={styles.timeItem2}>
            <h3>Таймер2</h3>
          </div>
          <div className={styles.buttonItem}>
            <button>Кнопка тык!</button>
          </div>
          <div className={styles.tableItem1}>
            <h3>Таблица1</h3>
          </div>
          <div className={styles.tableItem2}>
            <h3>Таблица2</h3>
          </div>
        </div>
      </div>
      <div className={styles.footerItem}>
        <h2>Your ad could have been here</h2>
      </div>
    </div>
  );
}

export default App;
