import React, {useContext, useState} from "react";
import styles from "./LastTenResults.module.css";
import applicationContext from "../../context";
import useDidMountEffect from "../../useDidMountEffect";
import { nanoid } from 'nanoid';

const LastTenResults = () => {

  const {lastResults} = useContext(applicationContext);

  const [allResults, setAllResults] = useState([]);

  const changeAllResults = (value) => {
    if(allResults.length > 9) {
      allResults.shift();
    }
    let changedAllResults = [...allResults, value];
    console.log("changedAllResults " + changedAllResults);
    setAllResults(changedAllResults);
  };

  useDidMountEffect(() => {
      if(lastResults.count !== 0){
        changeAllResults(lastResults);
      }
  }, [lastResults.count])

  // let results = allResults.map((obj) => {
  //   return <div key={nanoid(10)}>
  //     <input
  //     value={obj.count} 
  //     readOnly 
  //     />
  //     <input
  //     value={obj.best}  
  //     readOnly 
  //     />
  //     <input 
  //     value={obj.average} 
  //     readOnly 
  //     />
  //   </div>
  // })

  let resultsTwo = allResults.map((obj) => {
    return <tr key={nanoid(10)}>
      <td>{obj.count}</td> <td>{obj.best}</td> <td>{obj.average}</td>
    </tr>
  })


  return (
    <div className={styles.tableItem1}>
      {/* <h3>Последние 10 результатов</h3>
      {results} */}
      <table>
        <caption><b>Последние 10 результатов</b></caption>
        <thead>
          <tr>
            <th>Количество кликов</th> <th>Лучший клик</th> <th>Среднее время клика</th>
          </tr>
        </thead>
        <tbody>
          {resultsTwo}
        </tbody>
      </table>
    </div>
  );
};

export default LastTenResults;
