import React from "react";
import { observer } from 'mobx-react-lite'
import time from '../../store/time'
import CstClickButton from "../../components/cstClickButton/CstClickButton";
import CstStartButton from "../../components/cstStartButton/СstStartButton";
import CstInput from "../../components/cstInput/CstInput"
import CstCurrentResult from "../../components/cstCurrentResult/CstCurrentResult"
import CstLastTenResults from "../../components/cstLastTenResults/CstLastTenResults";

const Cst = observer(() => {

  return (
    <div>
      {console.log("отрендерился Cst")}
      <h1>Я Cst</h1>
      <CstInput />
      {time.isTimerRun ? (<CstClickButton />) : (<CstStartButton />)}
      <CstCurrentResult />
      <CstLastTenResults />
    </div>
  )
})

export default Cst;
