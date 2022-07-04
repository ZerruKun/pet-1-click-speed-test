import React, { useContext } from "react";
import styles from "./CurrentResults.module.css"
import applicationContext from "../../context"

const CurrentResults = () => {

  const {clickCount, bestTime} = useContext(applicationContext);

  return (
    <div className={styles.tableItem2}>
      <h3>Current results</h3>
      <input 
      value={clickCount}
      readOnly 
      />
      <input 
      value={bestTime}
      readOnly 
      />
      <input 
      readOnly 
      />
    </div>
  );
};

export default CurrentResults;
