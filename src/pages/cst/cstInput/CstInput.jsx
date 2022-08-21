import { observer } from 'mobx-react-lite'
import React from 'react'
import time from '../../../store/time'

const CstInput = observer(() => {
  return (
    <input value={time.startTime} onChange={(e) => {
        time.setStartTime(e.target.value); 
        console.log("Меняется время")
        }
    }/>
  )
})

export default CstInput
