import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './NavBar.css'
import hamburgerLogo from './hamburger.svg'
import logo from './logo.svg'
import close from './cancel.svg'
class NavBar extends Component {
    state = {  }
    componentDidMount(){
        var ham = document.getElementById('hamBtn');
        var close = document.getElementById('closeBtn');
        var draw = document.querySelector('.drawer');
        var as = document.querySelectorAll('#mob-nav > li > a');
        ham.addEventListener('click',()=>{
            draw.classList.add('draw-open')
        });


        close.addEventListener('click',()=>{
            draw.classList.remove('draw-open')
        })
        as.forEach((e)=>{
            e.addEventListener('click', () => {
                draw.classList.remove('draw-open')
            })
        })
    }
    render() { 
        return ( 
            <div id="NavBar">
                
                <div className="navigation">
                    <div className="mobile">
                        <div className="hamburger">
                            <img id="hamBtn" src={hamburgerLogo} alt="" />
                        </div>
                        <div className="drawer">
                            <div className="close">
                                <img id="closeBtn" src={close} alt="" />
                            </div>
                            <ul id="mob-nav">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Archivements</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="non-mobile">
                        <ul className="nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/certificates">Certificates</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="logo">
                   <img src={logo} alt="" />
                </div>

            </div> 
        );
    }

    
}


 
export default NavBar;