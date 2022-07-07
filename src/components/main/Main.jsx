import React from "react";
import CurrentResults from "../currentResult/CurrentResults";
import DestinationTime from "../destinationtime/DestinationTime";
import LastTenResults from "../lastTenResults/LastTenResults";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.mainItem}>
      {/* Пока только для первой страницы */}
      <div className={styles.cspContainer}>
        <DestinationTime />
        <LastTenResults />
        <CurrentResults />
      </div>
    </div>
  );
};

export default Main;
