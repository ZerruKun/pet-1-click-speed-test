import React from "react";
import { observer } from 'mobx-react-lite'
import CstInput from "../../components/cst/cstInput/CstInput"
import CstCurrentResult from "../../components/cst/cstCurrentResult/CstCurrentResult"
import CstLastTenResults from "../../components/cst/cstLastTenResults/CstLastTenResults";
import CstButton from "../../components/cst/cstButton/CstButton";
import styles from "../../styles/Cst.module.css"

const Cst = observer(() => {

  return (
    <div className={styles.general}>
      {console.log("отрендерился Cst")}
      <h2>Введите время в секундах</h2>
      <CstInput />
      <CstButton />
      <CstCurrentResult />
      <CstLastTenResults />
    </div>
  )
})

export default Cst;
