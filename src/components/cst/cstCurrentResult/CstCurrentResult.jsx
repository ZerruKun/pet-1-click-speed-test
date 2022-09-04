import React from 'react'
import CurrentClicks from './eachResult/CurrentClicks'
import CurrentBest from './eachResult/CurrentBest'
import CurrentAverage from './eachResult/CurrentAverage'
import styles from "../../../styles/Results.module.css"

const cstCurrentResult = () => {
  return (
    <table className={styles.general}>
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
          <CurrentBest />
          <CurrentAverage />
        </tr>
      </tbody>
    </table>
  )
}

export default cstCurrentResult