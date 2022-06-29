import React from "react";
import DestinationTime from "../destinationtime/DestinationTime";
import styles from "./Main.module.css";

const Main = () => {

  // const waitTime = (ms) => {
  //   let current_date = Date.now();
  //   while (current_date + ms > Date.now()) {}
  // }

  // const ClickyClicky = () => {
  //   for (let i = startTime; i>=0; i--) {
  //     changeStartTime(i);
  //     waitTime(1000);
  //   }
  // }

  return (
    <div className={styles.mainItem}>
      {/* Пока только для первой страницы */}
      <div className={styles.cspContainer}>
        <DestinationTime />
        <div className={styles.buttonItem}>
          <button>Кнопка тык!</button>
        </div>
        <div className={styles.tableItem1}>
          <h3>Таблица1</h3>
        </div>
        <div className={styles.tableItem2}>
          <h3>Таблица2</h3>
          <input 
            readOnly
          />
          <input 
            readOnly
          />
          <input 
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
