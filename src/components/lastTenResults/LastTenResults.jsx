import React, {useContext, useState} from "react";
import styles from "./LastTenResults.module.css";
import applicationContext from "../context/context";
import useDidMountEffect from "../hooks/useDidMountEffect";
import { nanoid } from 'nanoid';

const LastTenResults = () => {

  const {lastResults} = useContext(applicationContext);

  const [allResults, setAllResults] = useState([]);

  const changeAllResults = (value) => {
    if(allResults.length > 9) {
      allResults.shift();
    }
    let changedAllResults = [...allResults, value];
    setAllResults(changedAllResults);
  };

  useDidMountEffect(() => {
      if(lastResults.count !== 0){
        changeAllResults(lastResults);
      }
  }, [lastResults.count])

  let resultsTwo = allResults.map((obj) => {
    return (<tr key={nanoid(10)}>
      <td>{obj.tryNumber}</td><td>{obj.start}</td><td>{obj.count}</td>
      <td>{obj.best}</td><td>{obj.average}</td><td>{obj.cps}</td>
    </tr>)
  })

  return (
  <div className={styles.tableItem1}>
    <table className={styles.mainTable}>
      <caption><b>Последние 10 результатов</b></caption>
      <thead>
        <tr>
          <th>Попытка</th><th>Стартовое время</th><th>Количество кликов</th>
          <th>Лучший клик</th><th>Среднее время клика</th><th>КПС</th>
        </tr>
      </thead>
      <tbody>{resultsTwo}</tbody>
    </table>
  </div>);
};

export default LastTenResults;
