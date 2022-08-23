import React from 'react'

const CstLastTenResults = () => {
  return (
    <table>
      <caption><b>Последние 10 результатов</b></caption>
      <thead>
        <tr>
          <th>Попытка</th><th>Стартовое время</th><th>Количество кликов</th>
          <th>Лучший клик</th><th>Среднее время клика</th><th>КПС</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
      </tbody>
    </table>
);
}

export default CstLastTenResults
