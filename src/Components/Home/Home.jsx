import React, { Component } from "react";
import './Home.scss'
import resume from '../../assets/resume.pdf'

import Hero from "./Hero/Hero";
import Langs from "./Langs/Langs";
import Social from "./Social/Social";
import GetInTouch from "./GetInTouch/GetInTouch";
import Feedback from "./Feedback/Feedback";
import Tech_i_work_with from './Tech_i_work_with/Tech_i_work_with'
class Home extends Component {
    state = {  }

    componentDidMount(){
        var b = document.querySelector('.btbtn');

        b.addEventListener('scroll',()=>{
            alert(0)
        })
        window.addEventListener('scroll',(e)=>{
            if(window.pageYOffset>10){
                b.classList.add('btntop');
            }else{
                b.classList.remove('btntop');

            }
        })
    }
    render() { 
        return ( 
            <div id="Home">
                <a className="btbtn" href={resume}>Get my resume</a>
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