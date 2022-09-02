import React from 'react'
import { Route, Routes } from "react-router-dom";
import Cst from "../../pages/cst/Cst"
import AboutCst from "../../pages/aboutCst/AboutCst"
import Sidebar from "../sidebar/Sidebar"
import styles from "../../styles/Main.module.css"

const Main = () => {
  return (
    <div className={styles.general}>
      {console.log("отрендерился Main")}
      <Sidebar />
      <Routes>
        <Route path="/" element={<Cst />} />
        <Route path="*" element={<Cst />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
        <Route path="/about" element={<AboutCst />} />
      </Routes>
    </div>
  )
}

export default Main
