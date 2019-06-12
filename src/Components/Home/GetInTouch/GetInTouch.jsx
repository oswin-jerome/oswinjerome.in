import React,{Component} from 'react';
import './GetInTouch.scss';

import wa from './wa.svg';
import phone from './phone.svg';
import gmail from './gmail.svg';

class GetInTouch extends Component{

    state={}

    render(){
        return(
            <div id="GetInTouch">
                <p className="heading">Get in touch.</p>
                <div className="contact">
                    <div className="wa card-contact">
                        <img src={wa} alt=""/>
                        <a href="https://api.whatsapp.com/send?phone=918344441492">+91 8344441492</a>
                    </div>
                    <div className="phone card-contact">
                        <img src={phone} alt=""/>
                        <a href="tel://9487839640">+91 9487839640</a>
                    </div>
                    <div className="mail card-contact">
                        <img src={gmail} alt=""/>
                        <a href="mailto://oswinjeromej@gmail.com">oswinjeromej@gmail.com</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetInTouch;