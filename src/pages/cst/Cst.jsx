import React from "react";
import { observer } from 'mobx-react-lite'
import CstInput from "../../components/cst/cstInput/CstInput"
import CstCurrentResult from "../../components/cst/cstCurrentResult/CstCurrentResult"
import CstLastTenResults from "../../components/cst/cstLastTenResults/CstLastTenResults";
import CstButton from "../../components/cst/cstButton/CstButton";

const Cst = observer(() => {

  return (
    <div>
      {console.log("отрендерился Cst")}
      <CstInput />
      <CstButton />
      <CstCurrentResult />
      <CstLastTenResults />
    </div>
  )
})

export default Cst;
