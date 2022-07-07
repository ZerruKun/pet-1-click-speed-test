import React from "react";
import styles from "./LastTenResults.module.css";

const LastTenResults = () => {
  return (
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
  );
};

export default LastTenResults;
