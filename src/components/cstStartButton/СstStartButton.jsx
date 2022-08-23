import React from 'react'
import time from '../../store/time'

const СstStartButton = () => {
  return (
    <button style={{width: "100px", height: "100px"}} onClick={() => time.setIsTimerRun(true)}>
        {console.log("отрендерился СstStartButton")}
        Старт
    </button>
  )
}

export default СstStartButton
