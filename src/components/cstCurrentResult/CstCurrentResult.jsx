import React from 'react'

const cstCurrentResult = () => {
  return (
    <table>
      <caption><b>Текущий результат</b></caption>
      <thead>
        <tr>
          <th>Количество кликов</th><th>Лучший клик</th><th>Среднее время клика</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0</td><td>0</td><td>0</td>
        </tr>
      </tbody>
    </table>
  )
}

export default cstCurrentResult