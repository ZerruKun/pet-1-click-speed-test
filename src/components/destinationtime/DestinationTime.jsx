import React, { useState, useContext } from "react";
import style from "./DestinationTime.module.css";
import useDidMountEffect from "../../useDidMountEffect";
import applicationContext from "../../context";

const DestinationTime = () => {
  const [startTime, setStartTime] = useState("");

  const [timerStart, setTimerStart] = useState(false);

  const [isCanStart, setIsCanStart] = useState(false);

  const {
    remainingTime,
    setRemainingTime,
    clickCount,
    setClickCount,
    lastTime,
    setLastTime,
    bestTime,
    setBestTime,
    setAverageTime,
  } = useContext(applicationContext);

  useDidMountEffect(() => {
    timeTick();
  }, [remainingTime]);

  const waitTime = (ms) => {
    let current_date = Date.now();
    while (current_date + ms > Date.now()) {}
  };

  const timeTick = () => {
    if (remainingTime > 0) {
      changeRemainingTime((remainingTime - 0.01).toFixed(2));
      waitTime(10);
    } else {
      changeStartTime("");
      changeRemainingTime("");
      changeTimerStart(false);
      // changeClickCount(0);
      // changeLastTime(0);
      // changeBestTime(0);
      // setAverageTime(0);
    }
  };

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

  const changeRemainingTime = (value) => {
    let changedRemainingTime = value;
    // console.log(changedRemainingTime);
    setRemainingTime(changedRemainingTime);
  };

  const changeStartTime = (value) => {
    let changedStartTime = value;
    // console.log(changedStartTime);
    setStartTime(changedStartTime);
  };

  const changeTimerStart = (value) => {
    let isStarted = value;
    // console.log(isStarted);
    setTimerStart(isStarted);
  };

  const changeClickCount = (value) => {
    let changedClickCount = value;
    // console.log(changedClickCount);
    setClickCount(changedClickCount);
  };

  const changeLastTime = (value) => {
    let changedLastTime = value;
    // console.log("changedLastTime "+ changedLastTime);
    setLastTime(changedLastTime);
  };

  const changeBestTime = (value) => {
    let changedBestTime = value;
    // console.log("changedBestTime "+ changedBestTime);
    setBestTime(changedBestTime);
  };

  const changeAverageTime = (value) => {
    let changedAverageTime = value;
    // console.log("changedAverageTime "+ changedAverageTime);
    setAverageTime(changedAverageTime);
  };

  const changeSetIsCanStart = (value) => {
    let changedIsCanStart = value;
    console.log("changedIsCanStart " + changedIsCanStart);
    setIsCanStart(changedIsCanStart);
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
    if (e.currentTarget.value === "0" || e.currentTarget.value === "") {
      changeSetIsCanStart(false);
    } else {
      changeSetIsCanStart(true);
    }
  };

  const start = () => {
    if (startTime === "") {
      changeTimerStart(true);
      changeStartTime(2);
      changeRemainingTime(2);
    } else {
      changeTimerStart(true);
      changeRemainingTime(startTime);
    }
    changeSetIsCanStart(false);
  };

  const clickyClicky = () => {
    if (clickCount === 0) {
      changeClickCount(1);
      changeBestTime((startTime - remainingTime).toFixed(2));
      changeLastTime(remainingTime);
      changeAverageTime((startTime - remainingTime).toFixed(2));
    }
    if (clickCount > 0) {
      if (lastTime - remainingTime < bestTime) {
        changeBestTime((lastTime - remainingTime).toFixed(2));
        changeClickCount(clickCount + 1);
        changeLastTime(remainingTime);
        changeAverageTime(
          ((startTime - remainingTime) / clickCount).toFixed(2)
        );
        // console.log("Вариант1");
      } else {
        changeClickCount(clickCount + 1);
        changeLastTime(remainingTime);
        changeAverageTime(
          ((startTime - remainingTime) / clickCount).toFixed(2)
        );
        // console.log("Вариант2");
      }
    }
  };

  return (
    <div className={style.timeItem}>
      {timerStart === false ? (
        <div>
          <h3>Enter destination time</h3>
          <input
            value={startTime}
            type="text"
            onChange={checkStartTime}
            placeholder="Seconds between 1 and 120"
          />
        </div>
      ) : (
        <div>
          <h3>Click as fast as you can!</h3>
          <input value={remainingTime} type="text" readOnly />
          <div>
            <button onClick={clickyClicky}>Click!</button>
          </div>
        </div>
      )}
      {isCanStart === true ? (
        <div>
          <div>
            <button onClick={start}>Start</button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DestinationTime;
