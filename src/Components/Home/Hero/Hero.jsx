import React,{Component} from 'react'
import './Hero.scss'
import Typed from 'typed.js'
import pro from '../../../assets/pro.jpeg'
import ProPic from './propic.jpg'
import Arrow from './expand-button.svg'
class Hero extends Component {
    state = {  }
    componentDidMount(){
        var options = {
            strings: ["Programmer ", "Developer ", "Web Designer ", "Human 	(͡ ° ͜ʖ ͡ °)"],
            typeSpeed: 60,
            backSpeed:40,
            backDelay:1000,
            loop:true,
            loopCount:Infinity
        }

        var s = document.querySelector('img[alt="www.000webhost.com"]')
        s.hidden = false;
        new Typed("#typed", options);
    }
    render() { 
        return ( 
            <div id="Hero">
                <div id="propic" className="animated zoomIn fast">
                    <img id="dp" src={pro} alt="" />
                </div>
                <p id="Name">Oswin Jerome..</p>
                <p id="ImA">I'm a <span id="typed"></span></p>

                <div className="downArrow">
                    <img className="animated heartBeat " src={Arrow} alt=""/>
                </div>
                
            </div>
        );
    }
}
 
export default Hero;