import React from "react";
import styles from "./App.module.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Header/>
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
