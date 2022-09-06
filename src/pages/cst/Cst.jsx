import React from "react";
import { observer } from "mobx-react-lite";
import CstInput from "../../components/cst/cstInput/CstInput";
import CstCurrentResult from "../../components/cst/cstCurrentResult/CstCurrentResult";
import CstLastTenResults from "../../components/cst/cstLastTenResults/CstLastTenResults";
import CstButton from "../../components/cst/cstButton/CstButton";
import styles from "../../styles/Pages.module.css";

const Cst = observer(() => {
  return (
    <div className={styles.general}>
      <span className={styles.message}>Введите время в секундах</span>
      <CstInput />
      <CstButton />
      <CstCurrentResult />
      <CstLastTenResults />
    </div>
  );
});

export default Cst;