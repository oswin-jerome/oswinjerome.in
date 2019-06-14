

import React, { Component } from "react";
import './SingleCertificate.scss'
import cancel from './../../assets/cancel.svg'
class SingleCertificate extends Component{

        constructor(){
            super();

            this.set = this.set.bind(this);
        }

        state = {
            attr:false,
            cl:'hide'
        }
        

    render(){
        return(
            <div id="SingleCertificate">
                <img src={this.props.img} alt="" onClick= {(event)=>{
                this.setState({
                    attr:true,
                    cl:'show'
                })

                console.log(this.state.attr)
            }}/>
                <p className="title">{this.props.title}</p>

                {/* {this.state.attr?<div  className={'fullView'}>
                    <img  src={this.props.img} />
                    <img onClick={()=>{
                        this.setState({
                            attr:false
                        })
                    }} id="cert_close_btn" src={cancel}/>
                   
                </div>:null} */}
                <div  className={'fullView '+this.state.cl}>
                    <img  src={this.props.img} alt=""/>
                    <img alt="cancel" onClick={()=>{
                        this.setState({
                            attr:false,
                            cl:'hide'
                        })
                    }} id="cert_close_btn" src={cancel}/>
                   
                </div>

            </div>
        );
    }

    set =()=>{

        console.log("s")
        this.setState({
            attr:''
        },()=>{
            console.log(this.state.attr)
        })
    }

}


export default SingleCertificate;