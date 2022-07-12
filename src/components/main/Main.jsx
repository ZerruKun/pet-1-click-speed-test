import React, {memo}  from "react";
import CurrentResults from "../currentResult/CurrentResults";
import DestinationTime from "../destinationtime/DestinationTime";
import LastTenResults from "../lastTenResults/LastTenResults";
import styles from "./Main.module.css";

const Main = memo(() => {
  return (
    <div className={styles.mainItem}>
      {/* Пока только для первой страницы */}
      <div className={styles.cspContainer}>
        <DestinationTime />
        <CurrentResults />
        <LastTenResults />
      </div>
    </div>
  );
});

export default Main;
