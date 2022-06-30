import React from "react";
import DestinationTime from "../destinationtime/DestinationTime";
import styles from "./Main.module.css";

const Main = () => {

  return (
    <div className={styles.mainItem}>
      {/* Пока только для первой страницы */}
      <div className={styles.cspContainer}>
        <DestinationTime />
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
