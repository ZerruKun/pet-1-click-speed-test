import React from 'react'
import { Route, Routes } from "react-router-dom";
import Cst from "../../pages/cst/Cst"
import AboutCps from "../../pages/aboutCps/AboutCps"
import Navbar from "../navbar/Navbar"
import AboutTechnics from '../../pages/aboutTechnics/AboutTechnics';

const Main = () => {
  return (
    <div>
      {console.log("отрендерился Main")}
      <Navbar />
      <Routes>
        <Route path="/" element={<Cst />} />
        <Route path="*" element={<Cst />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
        <Route path="/aboutcps" element={<AboutCps />} />
        <Route path="/abouttechnics"  element={<AboutTechnics />} />
      </Routes>
    </div>
  )
}

export default Main
