import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../../store/store'

const CstClickButton = observer(() => {

    const onButtonClick = () => {
        store.setCurentBest();
        store.setCurrentClicks();
        store.setCurrentAverage();
      }

    return (
        <button 
            style={{width: "100px", height: "100px"}} 
            onClick={onButtonClick}
        >
            {console.log("отрендерился Клик!")}
            Клик!
        </button>
    )
})

export default CstClickButton
