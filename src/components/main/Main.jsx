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
          <h3>Таблица1</h3>
        </div>
        <CurrentResults />
      </div>
    </div>
  );
};

export default Main;
