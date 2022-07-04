import React from "react";
import CurrentResults from "../currentResult/CurrentResults";
import DestinationTime from "../destinationtime/DestinationTime";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.mainItem}>
      {/* Пока только для первой страницы */}
      <div className={styles.cspContainer}>
        <DestinationTime />
        <div className={styles.tableItem1}>
          <h3>Last 10 results</h3>
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
        <CurrentResults />
      </div>
    </div>
  );
};

export default Main;
