import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Main from "./components/main/Main";
import styles from "./styles/App.module.css"

const App = () => {
  return (
    <div className={styles.general}>
      {console.log("отрендерился App")}
      <Header />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
