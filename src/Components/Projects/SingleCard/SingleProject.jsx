

import React, { Component } from "react";
import './SingleProject.scss'
// import cancel from './../../assets/cancel.svg'
class SingleProject extends Component{

        constructor(){
            super();
        }

        state = {
        }
        

    render(){
        return(
            <div id="SingleProject">
                <a href={this.props.link} target="_blank" className="link">
                    <img src={this.props.img} alt=""/>
                    <p className="title">{this.props.title}</p>
                </a>
            </div>
        );
    }

}


export default SingleProject;