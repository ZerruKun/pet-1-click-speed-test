import React, { useContext } from "react";
import styles from "./CurrentResults.module.css"
import applicationContext from "../../context"

const CurrentResults = () => {

  const {clickCount, bestTime, averageTime} = useContext(applicationContext);

  return (
    <div className={styles.tableItem2}>
      <h3>Текущий результат</h3>
      <input 
      value={clickCount}
      readOnly 
      />
      <input 
      value={bestTime}
      readOnly 
      />
      <input 
      value={averageTime}
      readOnly 
      />
    </div>
  );
};

export default CurrentResults;
