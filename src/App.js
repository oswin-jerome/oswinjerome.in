import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
// Components import
import  NavBar  from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Footer from './Components/Footer/Footer'
import TempPage from "./Components/TempPage/TempPage";
import Certificate from "./Components/Certificates/Certificate";
import PageNotFound from "./Components/PaheNotFound/PageNotFound";
import Projects from "./Components/Projects/Projects";
import $ from 'jquery'
function App() {



  return (
    <div className="App">
    <Router>
      <NavBar></NavBar>
      {/* <TempPage></TempPage> */}
      <div className="Body">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/certificates" exact component={Certificate}></Route>
          <Route path="/projects" exact component={Projects}></Route>
          
          {/* Page not found */}
          <Route component={PageNotFound}></Route>
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
