import React, {memo}  from "react";
import CurrentResults from "../../currentResult/CurrentResults";
import DestinationTime from "../../destinationtime/DestinationTime";
import LastTenResults from "../../lastTenResults/LastTenResults";
import styles from "./Cst.module.css";

const Cst = memo(() => {
  return (
    <div className={styles.mainItem}>
      <div className={styles.cspContainer}>
        <DestinationTime />
        <CurrentResults />
        <LastTenResults />
      </div>
    </div>
  );
});

export default Cst;
