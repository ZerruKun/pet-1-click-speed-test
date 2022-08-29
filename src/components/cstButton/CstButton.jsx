import React from 'react'
import { observer } from 'mobx-react-lite'
import time from '../../store/time'

const CstButton = observer(() => {

  return (
    <div>
      {time.isTimerRun ? (
        <button style={{width: "100px", height: "100px"}} onClick={() => time.setIsTimerRun(false)}>
            {console.log("отрендерился Клик!")}
            Клик!
        </button>
      ) : (
        <button disabled={time.isTimeCorrect === false} style={{width: "100px", height: "100px"}} onClick={() => {time.setIsTimerRun(true)}}>
            {console.log("отрендерился Старт")}
            Старт
        </button>
      )}
    </div>
  )
})

export default CstButton
