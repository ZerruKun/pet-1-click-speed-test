import React from "react";
import { observer } from 'mobx-react-lite'
import CstInput from "../../components/cstInput/CstInput"
import CstCurrentResult from "../../components/cstCurrentResult/CstCurrentResult"
import CstLastTenResults from "../../components/cstLastTenResults/CstLastTenResults";
import CstButton from "../../components/cstButton/CstButton";

const Cst = observer(() => {

  return (
    <div>
      {console.log("отрендерился Cst")}
      <h1>Я Cst</h1>
      <CstInput />
      <CstButton />
      <CstCurrentResult />
      <CstLastTenResults />
    </div>
  )
})

export default Cst;
