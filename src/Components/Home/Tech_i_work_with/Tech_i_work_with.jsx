
import React, { Component } from "react";
import "./Tech_i_work_with.scss";


// Images
import adobeXD from './adobe-xd.svg';
import androidStudio from './android-studio.png';
import flutter from './flutter.svg';
import Nodejs from './nodejs-icon.svg';
import reactjs from './react.svg';
import vuejs from './vue-9.svg';

class Tech_i_work_with extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="TechIWorkWith" className="dark-bg">
                <p className="heading"><span className="high">Tech</span> I work with.</p>

                <div className="content">
                    <img src={androidStudio} alt=""/>
                    <img src={flutter} alt=""/>
                    <img src={Nodejs} alt=""/>
                    <img src={reactjs} alt=""/>
                    <img src={vuejs} alt=""/>
                </div>
            </div>
        );
    }
}
 
export default Tech_i_work_with;