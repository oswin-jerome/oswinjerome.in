import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Components import
import  NavBar  from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Footer from './Components/Footer/Footer'
import TempPage from "./Components/TempPage/TempPage";
import Certificate from "./Components/Certificates/Certificate";

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar></NavBar>

      <div className="Body">
        <Route path="/" exact component={Home}></Route>
        <Route path="/certificates" exact component={Certificate}></Route>
      </div>
      <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
