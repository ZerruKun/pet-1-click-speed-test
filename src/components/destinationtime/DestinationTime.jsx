import React, {useState} from "react";
import style from "./DestinationTime.module.css";

const DestinationTime = () => {
  const [startTime, setStartTime] = useState("");

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

  return (
      <div className={style.timeItem}>
        <h3>Enter destination time</h3>
        <input
          value={startTime}
          type="text"
          onChange={checkStartTime}
          placeholder="Seconds between 1 and 120"
        />
      </div>
  );
};

export default DestinationTime;
