import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
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
  );
};

export default Main;
