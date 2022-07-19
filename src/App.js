import React from "react";
import styles from "./components/styles/App.module.css";
import Header from "./components/header/Header";
import Cst from "./components/pages/cst/Cst";
import WhatIsCps from "./components/pages/whatIsCps/WhatIsCps";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Header/>
      <Sidebar />
      <Routes>
        <Route path="" element={<Cst />}></Route>
        <Route path="*" element={<Cst />}></Route>
        <Route path="/cst" element={<Cst />}></Route>
        <Route path="/whatiscps" element={<WhatIsCps />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
