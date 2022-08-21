import React from 'react'
import { Route, Routes } from "react-router-dom";
import Cst from "../../pages/cst/Cst"
import AboutCst from "../../pages/aboutCst/AboutCst"
import Sidebar from "../sidebar/Sidebar"

const Main = () => {
  return (
    <div>
      {console.log("отрендерился Main")}
      <h1>Я Main</h1>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Cst />} />
        <Route path="*" element={<Cst />} />
        <Route path="/about" element={<AboutCst />} />
      </Routes>
    </div>
  )
}

export default Main
