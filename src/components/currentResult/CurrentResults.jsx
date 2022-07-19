import React, { useContext } from "react";
import styles from "./CurrentResults.module.css"
import applicationContext from "../context/context"

const CurrentResults = () => {

  const {clickCount, bestTime, averageTime} = useContext(applicationContext);

  return (
  <div className={styles.tableItem2}>
    <table className={styles.mainTable}>
      <caption><b>Текущий результат</b></caption>
      <thead>
        <tr>
          <th>Количество кликов</th><th>Лучший клик</th><th>Среднее время клика</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{clickCount}</td><td>{bestTime}</td><td>{averageTime}</td>
        </tr>
      </tbody>
    </table>
  </div>);
};

export default CurrentResults;
