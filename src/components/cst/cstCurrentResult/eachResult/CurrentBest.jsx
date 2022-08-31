import React from 'react'
import { observer } from 'mobx-react-lite'
import store from "../../../../store/store"

const CurrentBest = observer(() => {
  return (
    <td>{store.currentResults.currentBest}</td>
  )
})

export default CurrentBest
