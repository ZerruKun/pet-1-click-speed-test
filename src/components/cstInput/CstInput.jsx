import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import time from '../../store/time'

const CstInput = observer(() => {

  useEffect(() => {
    if(time.startTime === "0.00"){
      time.changeStartTime("");
      time.setIsTimerRun(false);
    }

    if (!time.startTime) return;

    if(time.isTimerRun) {
      const interval = setInterval(() => {
        time.changeStartTime((time.startTime - 0.01).toFixed(2));
      }, 10);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[time.startTime, time.isTimerRun]);


  return (
    <div>
        {console.log("отрендерился CstInput")}
        <input style={ {width: "100px"} } value={time.startTime} onChange={(e) => {
            time.setStartTime(e.target.value); 
            console.log("Меняется время")
            }
        }/>
    </div>
  )
})

export default CstInput
