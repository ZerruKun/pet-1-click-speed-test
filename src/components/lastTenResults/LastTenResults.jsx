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

  let results = allResults.map((obj) => {
    return <div key={nanoid(10)}>
      <input
      value={obj.count} 
      readOnly 
      />
      <input
      value={obj.best}  
      readOnly 
      />
      <input 
      value={obj.average} 
      readOnly 
      />
    </div>
  })


  return (
    <div className={styles.tableItem1}>
      <h3>Last 10 results</h3>
      {results}
    </div>
  );
};

export default LastTenResults;
