import React, { useState } from "react";
import style from "./DestinationTime.module.css";

const DestinationTime = () => {
  const [startTime, setStartTime] = useState("");

  const [timerStart, setTimerStart] = useState(false);

  const isRealNumber = (num) => {
    if (
      num === "0" ||
      num === "1" ||
      num === "2" ||
      num === "3" ||
      num === "4" ||
      num === "5" ||
      num === "6" ||
      num === "7" ||
      num === "8" ||
      num === "9"
    ) {
      return true;
    }
  };

  const changeStartTime = (value) => {
    let changedStartTime = value;
    console.log(changedStartTime);
    setStartTime(changedStartTime);
  };

  const changeTimerStart = (value) => {
    let isStarted = value;
    console.log(isStarted);
    setTimerStart(isStarted);
  };

  const checkStartTime = (e) => {
    if (e.currentTarget.value > 120) {
      e.currentTarget.value = 120;
    } else if (e.currentTarget.value === "0") {
      e.currentTarget.value = "";
    } else {
      let time = [...e.currentTarget.value];
      let filteredTime = time.filter(isRealNumber);
      e.currentTarget.value = filteredTime.join("");
    }
    changeStartTime(e.currentTarget.value);
  };

  // const waitTime = (ms) => {
  //   let current_date = Date.now();
  //   while (current_date + ms > Date.now()) {}
  // }

  // const ClickyClicky = () => {
  //   for (let i = startTime; i>=0; i--) {
  //     changeStartTime(i);
  //     waitTime(1000);
  //   }
  // }

  const ClickyClicky = () => {
    changeTimerStart(!timerStart);
  };

  return (
    <div className={style.timeItem}>
      <h3>Enter destination time</h3>
      {!timerStart ? (
        <div>
          <input
            value={startTime}
            type="text"
            onChange={checkStartTime}
            placeholder="Seconds between 1 and 120"
          />
          <div>
            <button onClick={ClickyClicky}>Кнопка тык!</button>
          </div>
        </div>
      ) : (
        <div>
          <input
            value={startTime}
            type="text"
            readOnly
          />
          <div>
            <button onClick={ClickyClicky}>Кнопка пык!</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default DestinationTime;
