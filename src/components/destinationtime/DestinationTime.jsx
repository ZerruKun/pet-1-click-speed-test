import React, { useState, useContext} from "react";
import style from "./DestinationTime.module.css";
import useDidMountEffect from "../hooks/useDidMountEffect";
import applicationContext from "../context/context";

const DestinationTime = () => {
  
  const [startTime, setStartTime] = useState("");
  const [timerStart, setTimerStart] = useState(false);
  const [isCanStart, setIsCanStart] = useState(false);
  const [tryCount, setTryCount] = useState(0);
  
  const {
    remainingTime,
    setRemainingTime,
    clickCount,
    setClickCount,
    lastTime,
    setLastTime,
    bestTime,
    setBestTime,
    averageTime,
    setAverageTime,
    setLastResults,
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
      changeLastResults(tryCount, startTime, clickCount, bestTime, averageTime);
      changeStartTime("");
      changeRemainingTime("");
      changeTimerStart(false);
      changeClickCount(0);
      changeLastTime(0);
      changeBestTime(0);
      setAverageTime(0);
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
    setRemainingTime(changedRemainingTime);
  };

  const changeStartTime = (value) => {
    let changedStartTime = value;
    setStartTime(changedStartTime);
  };

  const changeTimerStart = (value) => {
    let isStarted = value;
    setTimerStart(isStarted);
  };

  const changeClickCount = (value) => {
    let changedClickCount = value;
    setClickCount(changedClickCount);
  };

  const changeLastTime = (value) => {
    let changedLastTime = value;
    setLastTime(changedLastTime);
  };

  const changeBestTime = (value) => {
    let changedBestTime = value;
    setBestTime(changedBestTime);
  };

  const changeAverageTime = (value) => {
    let changedAverageTime = value;
    setAverageTime(changedAverageTime);
  };

  const changeIsCanStart = (value) => {
    let changedIsCanStart = value;
    setIsCanStart(changedIsCanStart);
  };

  const changeLastResults = (tryNumber, start, count, best, average) => {
    let cps = ((count/start).toFixed(2));
    let changedLastResults = {tryNumber, start, count, best, average, cps};
    setLastResults(changedLastResults);
  };

  const changeTryCount = (value) => {
    let changedTryCount = value;
    setTryCount(changedTryCount);
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
    if (e.currentTarget.value === "") {
      changeIsCanStart(false);
    } else {
      changeIsCanStart(true);
    }
  };

  const start = () => {
    changeTryCount(tryCount+1);
    changeTimerStart(true);
    changeRemainingTime(startTime);
    changeIsCanStart(false);
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
      } else {
        changeClickCount(clickCount + 1);
        changeLastTime(remainingTime);
        changeAverageTime(
          ((startTime - remainingTime) / clickCount).toFixed(2)
        );
      }
    }
  };

  return (
    <div className={style.timeItem}>
      <h2>???????? ???????????????? ??????????</h2>
      {timerStart === false ? ( 
        <div>
          <h3>?????????????? ?????????? ?? ????????????????</h3>
          <input
            value={startTime}
            type="text"
            onChange={checkStartTime}
            placeholder="1 - 120"
          />
        </div>
      ) : (
        <div>
          <h3>???????????????? ?????? ?????????? ??????????????!</h3>
          <input value={remainingTime} type="text" readOnly />
          <div>
            <button className={style.stylishButton} onClick={clickyClicky}>????????!</button>
          </div>
        </div>
      )}
      {isCanStart === true ? (
        <div>
          <div>
            <button className={style.stylishButton} onClick={start}>??????????</button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {timerStart === false && isCanStart === false ? (
        <div className={style.noButtonDiv}><h3>?????????????????? ?????????? ???????????????? ???? 1 ???? 120</h3></div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DestinationTime;
