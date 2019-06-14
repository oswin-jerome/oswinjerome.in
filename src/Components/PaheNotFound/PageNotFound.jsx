import React, { Component } from "react";
import pic from '../../assets/pageNotFound.jpg'
import './PageNotFound.scss'
class PageNotFound extends Component {
        state = {  }
        render() { 
                return ( 
                        <div id="f">
                                <div id="PageNotFound">
                                <img src={pic} alt=""/>
                                <div className="fourOfour">
                                        <p id="fof">404</p>
                                        <p id="notFound">PAGE NOT FOUND</p>
                                </div>
                        </div>
                        </div>
                );
        }
}
 
export default PageNotFound;