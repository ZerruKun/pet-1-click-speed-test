import React from 'react'
import { observer } from 'mobx-react-lite'
import store from "../../../../store/store"

const Results = observer(() => {

    let results = store.lastTenResults.map((obj) => {
        return (<tr key={obj.tryCount}>
          <td>{obj.tryCount}</td><td>{obj.startCount}</td><td>{obj.clickCount}</td>
          <td>{obj.bestClick}</td><td>{obj.averageClick}</td><td>{obj.cps}</td>
        </tr>)
      })

    return (
        <tbody>{results}</tbody>
    )
})

export default Results
