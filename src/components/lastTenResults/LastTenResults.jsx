import React, {useContext} from "react";
import styles from "./LastTenResults.module.css";
import applicationContext from "../../context";

const LastTenResults = () => {

  const {lastResults} = useContext(applicationContext);

  return (
    <div className={styles.tableItem1}>
      <h3>Last 10 results</h3>
      <input
      value={lastResults.count} 
      readOnly 
      />
      <input
      value={lastResults.best}  
      readOnly 
      />
      <input 
      value={lastResults.average} 
      readOnly 
      />
    </div>
  );
};

export default LastTenResults;
