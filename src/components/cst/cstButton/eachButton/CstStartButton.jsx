import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../../store/store'

const CstStartButton = observer(() => {
  return (
    <button 
        disabled={store.isTimeCorrect === false} 
        style={{width: "100px", height: "100px"}} 
        onClick={() => {store.setIsTimerRun(true)}}
    >
        {console.log("отрендерился Старт")}
        Старт
    </button>
  )
})

export default CstStartButton
