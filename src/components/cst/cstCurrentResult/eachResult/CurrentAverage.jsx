import React from 'react'
import { observer } from 'mobx-react-lite'
import store from "../../../../store/store"

const CurrentAverage = observer(() => {
  return (
    <td>{store.currentResults.currentAverage}</td>
  )
})

export default CurrentAverage
