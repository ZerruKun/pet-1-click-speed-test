import { observer } from 'mobx-react-lite'
import React, { useEffect} from 'react'
import store from "../../../store/store"

const CstInput = observer(() => {

  useEffect(() => {
    if(store.startTime === "0.00"){
      store.changeStartTime("");
      store.setIsTimerRun(false);
      store.changeIsTimeCorrect(false);
      // store.setCurrentClicks(0); пока так для наглядности.
    }

    if (!store.startTime) return;

    if(store.isTimerRun) {
      const interval = setInterval(() => {
        store.changeStartTime((store.startTime - 0.01).toFixed(2));
      }, 10);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[store.startTime, store.isTimerRun]);

  const isTimeCorrect = () => {
    if(store.startTime > 0) {
      store.changeIsTimeCorrect(true);
    } else {
      store.changeIsTimeCorrect(false);
    }
  }

  return (
    <div>
        {console.log("отрендерился CstInput")}
        <input style={ {width: "100px"} } value={store.startTime} onChange={(e) => {
            store.setStartTime(e.target.value);
            isTimeCorrect();
            console.log("Меняется время")
            }
        }/>
    </div>
  )
})

export default CstInput