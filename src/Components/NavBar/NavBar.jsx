import React, { Component } from 'react';

import { BrowserRouter as Router, Link,NavLink } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './NavBar.css'
import hamburgerLogo from './hamburger.svg'
import logo from './logo.svg'
import close from './cancel.svg'
import resume from '../../assets/resume.pdf'
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

        // var b = document.querySelector('.btbtn');

        // b.addEventListener('scroll',()=>{
        //     alert(0)
        // })
        // window.addEventListener('scroll',(e)=>{
        //     if(window.pageYOffset>10){
        //         b.classList.add('btntop');
        //     }else{
        //         b.classList.remove('btntop');

        //     }
        // })

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
                {/* <a className="btbtn" href={resume}>Get my resume</a> */}
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
                                <li><NavLink to="/" exact activeClassName="NavLinkActiveMob">Home</NavLink></li>
                            <li><NavLink to="/projects" activeClassName="NavLinkActiveMob">Projects</NavLink></li>
                            <li><NavLink to="/certificates" activeClassName="NavLinkActiveMob">Certificates</NavLink></li>
                            {/* <li className="mob"><a className="style-btn mxob" href={resume}>Get my resume</a></li> */}
                            </ul>
                            
                        </div>
                    </div>

                    <div className="non-mobile">
                        <ul className="nav">
                            <li><NavLink to="/" exact activeClassName="NavLinkActive">Home</NavLink></li>
                            <li><NavLink to="/projects" activeClassName="NavLinkActive">Projects</NavLink></li>
                            <li><NavLink to="/certificates" activeClassName="NavLinkActive">Certificates</NavLink></li>
                            <li><a className="style-btn" href={resume}>Get my resume</a></li>
                            {/* <li className="githublink"><NavLink to="/certificates" activeClassName="NavLinkActive">GitHub</NavLink></li> */}
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