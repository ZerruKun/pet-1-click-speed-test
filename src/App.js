import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Sidebar from "./components/sidebar/Sidebar"
import Cst from "./pages/cst/Cst"
import AboutCst from "./pages/aboutCst/AboutCst"

const App = () => {
  return (
    <div>
      {console.log("я отрендерился целиком")}
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Cst />} />
        <Route path="*" element={<Cst />} />
        <Route path="/cst" element={<Cst />} />
        <Route path="/about" element={<AboutCst />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
