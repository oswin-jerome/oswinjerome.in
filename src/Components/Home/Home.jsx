import React, { Component } from "react";
import './Home.scss'

import Hero from "./Hero/Hero";
import Langs from "./Langs/Langs";
import Social from "./Social/Social";
import GetInTouch from "./GetInTouch/GetInTouch";
import Feedback from "./Feedback/Feedback";
import Tech_i_work_with from './Tech_i_work_with/Tech_i_work_with'
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="Home">
                <Hero></Hero>
                <Tech_i_work_with></Tech_i_work_with>
                <Langs></Langs>
                <Social></Social>
                <GetInTouch></GetInTouch>
                <Feedback></Feedback>
            </div> 
        );
    }
}
 
export default Home;