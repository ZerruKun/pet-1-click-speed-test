import { observer } from 'mobx-react-lite'
import React from 'react'
import time from '../../store/time'

const CstInput = observer(() => {
  return (
    <div>
        {console.log("отрендерился CstInput")}
        <input style={ {width: "100px"} }value={time.startTime} onChange={(e) => {
            time.setStartTime(e.target.value); 
            console.log("Меняется время")
            }
        }/>
    </div>
  )
})

export default CstInput
