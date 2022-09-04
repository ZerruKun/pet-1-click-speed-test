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
      <span className={styles.message}>Введите время в секундах</span>
      <CstInput />
      <CstButton />
      <CstCurrentResult />
      <CstLastTenResults />
    </div>
  )
})

export default Cst;
