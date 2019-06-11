

import React,{ Component } from "react";
import './Footer.scss'
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="Footer">
                <div className="copyRight">
                    Ⓒ 2019 , oswinjeromej.in
                </div>
                <div className="designed">
                    <p>Designed and devloped by Oswin Jerome</p>
                    <p>Using ReactJS</p>
                </div>
            </div>
        );
    }
}
 
export default Footer;