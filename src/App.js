import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Main from "./components/main/Main";

const App = () => {
  return (
    <div>
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
