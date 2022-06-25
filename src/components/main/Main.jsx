import React from "react";
import styles from "./Main.module.css";
import { useState } from "react";

const Main = () => {

  const [startTime, setStartTime] = useState("");

  const [remainingTime, setRemainingTime] = useState("");

  const [isTimerUp, setIsTimerUp] = useState(false);

  const isRealNumber = (num) => {
    if(num === "0" || num === "1" || num === "2" || 
      num === "4" || num === "5" || num === "6" || 
      num === "7" || num === "8" || num === "9") {
        return true;
      }
  }

  const checkStartTime = (e) => {
    if(e.currentTarget.value > 120) {
      e.currentTarget.value = 120;
    } else if (e.currentTarget.value === "0") {
      e.currentTarget.value = "";
    } else {
      let time = [...e.currentTarget.value];
      console.log(time);
      let filteredTime = time.filter(isRealNumber);
      console.log(filteredTime);
      e.currentTarget.value = filteredTime.join('');
    }

    console.log(e.currentTarget.value);

    setStartTime(e.currentTarget.value);
    setRemainingTime(e.currentTarget.value);
  }

  const startTimer = () => {
    
  }

  let n = 0;

  const ClickyClicky = () => {
    if(remainingTime === "") {
      setStartTime(30)
      setRemainingTime(30);
    }
    if(!isTimerUp) {
      setIsTimerUp(true);
      startTimer();
    }
    if(isTimerUp) {
      n++;
      console.log(n);
    }
  }

  return (
    <div className={styles.mainItem}>
      {/* Пока только для первой страницы */}
      <div className={styles.cspContainer}>
        <div className={styles.timeItem1}>
          <h3>Enter destination time</h3>
          <input
            value={startTime}
            type="text"
            onChange={checkStartTime}
          />
        </div>
        <div className={styles.timeItem2}>
          <h3>Remaining time</h3>
          <input
            value={remainingTime}
            type="text"
            readOnly
            // onChange={checkRemainingTime}
          />
        </div>
        <div className={styles.buttonItem}>
          <button onClick={ClickyClicky}>Кнопка тык!</button>
        </div>
        <div className={styles.tableItem1}>
          <h3>Таблица1</h3>
        </div>
        <div className={styles.tableItem2}>
          <h3>Таблица2</h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
