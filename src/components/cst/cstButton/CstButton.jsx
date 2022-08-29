import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/store'

const CstButton = observer(() => {

  const clickTest = () => {
    store.setCurrentClicks();
  }

  return (
    <div>
      {store.isTimerRun ? (
        <button style={{width: "100px", height: "100px"}} onClick={clickTest}>
            {console.log("отрендерился Клик!")}
            Клик!
        </button>
      ) : (
        <button disabled={store.isTimeCorrect === false} style={{width: "100px", height: "100px"}} onClick={() => {store.setIsTimerRun(true)}}>
            {console.log("отрендерился Старт")}
            Старт
        </button>
      )}
    </div>
  )
})

export default CstButton
