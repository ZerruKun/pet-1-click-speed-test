import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../../store/store'

const CstStartButton = observer(() => {

    const onButtonClick = () => {
        store.setIsTimerRun(true)
        store.changeTransitionTime(store.startTime);
        store.changeInitialTime(store.startTime);
      }

    return (
        <button 
            disabled={store.isTimeCorrect === false} 
            style={{width: "100px", height: "100px"}} 
            onClick={onButtonClick}
        >
            {console.log("отрендерился Старт")}
            Старт
        </button>
    )
})

export default CstStartButton
