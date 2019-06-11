import React from 'react';
import './App.css';

// Components import
import  NavBar  from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
