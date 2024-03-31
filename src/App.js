// this is a learning project using function baseed react components
//Text utils by harrly bhas a lot of features that i haventy been included like
//darkmode,router.switch,
//preview of text ,copy.removal of white-spaces buttons etc

import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState({});
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert({});
    }, 1500);
  };
  return (
    <>
        <Navbar title="Text Utiliites" about="About" />
        <Alert alert={alert} />
      <Router>
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter Your TextHere To Anaylze" showalert={showalert} />} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
