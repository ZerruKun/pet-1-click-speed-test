import React from "react";
import styles from "./Main.module.css";
import { useState } from "react";
import useDidMountEffect from "../../useDidMountEffect";

const Main = () => {

  const [startTime, setStartTime] = useState("");

  const [remainingTime, setRemainingTime] = useState("");

  const [isTimerUp, setIsTimerUp] = useState(false);

  const [clickCount, setClickCount] = useState(0);

  const isRealNumber = (num) => {
    if(num === "0" || num === "1" || num === "2" || num === "3" ||
      num === "4" || num === "5" || num === "6" || 
      num === "7" || num === "8" || num === "9") {
        return true;
      }
  }

  const waitTime = (ms) => {
    let current_date = Date.now();
    while (current_date + ms > Date.now()) {}
  }

  const timetTick = () => {
    if(remainingTime > 0) {
      setRemainingTime((remainingTime-0.01).toFixed(2));
      waitTime(10);
      // console.log(remainingTime);
    } else {
      setRemainingTime("Time's up!");
      setIsTimerUp(false);

    }
  }

  const timestamp = () => {
    setClickCount(clickCount+1);
    console.log(clickCount);
  }

  useDidMountEffect(() => {
    timetTick();
  }, [remainingTime])


  //Проверка на ввод стартового времени

  const checkStartTime = (e) => {
    if(e.currentTarget.value > 120) {
      e.currentTarget.value = 120;
    } else if (e.currentTarget.value === "0") {
      e.currentTarget.value = "";
    } else {
      let time = [...e.currentTarget.value];
      // console.log(time);
      let filteredTime = time.filter(isRealNumber);
      // console.log(filteredTime);
      e.currentTarget.value = filteredTime.join('');
    }

    console.log(e.currentTarget.value);

    setStartTime(e.currentTarget.value);
  }

  //Кнопка и изменение таймеров

  // const changeTimer = () => {
  //   setInterval(() => {
  //     console.log("bub!");
  //     console.log(startTime);
  //   }, 1000);
  // }

  // const changeTimer = () => {

  // }

  const ClickyClicky = () => {
    if(startTime === "" && !isTimerUp) {
      setStartTime(10);
      setRemainingTime(10);
      setIsTimerUp(true);
    } else if (!isTimerUp) {
      setRemainingTime(startTime);
      setIsTimerUp(true);
    }
    if(isTimerUp) {
      timestamp();
    }

    // console.log(remainingTime);
  }

  //Вывод мейна

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
            placeholder="Seconds between 1 and 120"
          />
        </div>
        <div className={styles.timeItem2}>
          <h3>Remaining time</h3>
          <input
            value={remainingTime}
            type="text"
            readOnly
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
          <input 
            value={clickCount} 
            readOnly
          />
          <input 
            //best click
            readOnly
          />
          <input 
            //average click
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
