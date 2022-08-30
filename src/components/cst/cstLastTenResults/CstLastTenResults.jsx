import React from 'react'
import { observer } from 'mobx-react-lite'
import store from "../../../store/store"

const CstLastTenResults = observer(() => {

let results = store.lastTenResults.map((obj) => {
  return (<tr>
    <td>{obj.tryCount}</td><td>{obj.startCount}</td><td>{obj.clickCount}</td>
    <td>{obj.bestClick}</td><td>{obj.averageClick}</td><td>{obj.csp}</td>
  </tr>)
})

  return (
    <table>
      {console.log("отрендерился CstLastTenResults")}
      <caption><b>Последние 10 результатов</b></caption>
      <thead>
        <tr>
          <th>Попытка</th><th>Стартовое время</th><th>Количество кликов</th>
          <th>Лучший клик</th><th>Среднее время клика</th><th>КПС</th>
        </tr>
      </thead>
      <tbody>{results}</tbody>
    </table>
);
})

export default CstLastTenResults
