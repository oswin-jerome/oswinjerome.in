

import React, { Component } from "react";
import './SingleCertificate.scss'

class SingleCertificate extends Component{

        SingleCertificate(data){

        }
    render(){
        return(
            <div id="SingleCertificate">
                <img src={this.props.img} alt=""/>
                <p className="title">{this.props.title}</p>
            </div>
        );
    }

}


export default SingleCertificate;