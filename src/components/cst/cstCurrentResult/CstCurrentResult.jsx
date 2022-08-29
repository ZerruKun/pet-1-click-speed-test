import React from 'react'
import { observer } from 'mobx-react-lite'
import store from "../../../store/store"
import CurrentClicks from './eachResult/CurrentClicks'

const cstCurrentResult = observer(() => {
  return (
    <table>
      {console.log("отрендерился cstCurrentResult")}
      <caption><b>Текущий результат</b></caption>
      <thead>
        <tr>
          <th>Количество кликов</th><th>Лучший клик</th><th>Среднее время клика</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <CurrentClicks />
          <td>{store.currentResults.currentBest}</td>
          <td>{store.currentResults.currentAverage}</td>
        </tr>
      </tbody>
    </table>
  )
})

export default cstCurrentResult