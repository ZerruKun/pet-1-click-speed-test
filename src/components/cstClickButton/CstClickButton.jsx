import React from 'react'
import time from '../../store/time' //Временно для теста.

const CstClickButton = () => {
  return (
    <button style={{width: "100px", height: "100px"}} onClick={() => time.setIsTimerRun(false)}>
        {console.log("отрендерился CstClickButton")}
        Клик!
    </button>
  )
}

export default CstClickButton
