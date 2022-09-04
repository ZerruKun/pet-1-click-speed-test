import React from 'react'
import Results from './results/Results'
import styles from "../../../styles/Results.module.css"

const CstLastTenResults = () => {

  return (
    <table className={styles.general}>
      {console.log("отрендерился CstLastTenResults")}
      <caption><b>Последние 10 результатов</b></caption>
      <thead>
        <tr>
          <th>Попытка</th><th>Стартовое время</th><th>Количество кликов</th>
          <th>Лучший клик</th><th>Среднее время клика</th><th>КПС</th>
        </tr>
      </thead>
      <Results />
    </table>
  );
}

export default CstLastTenResults
