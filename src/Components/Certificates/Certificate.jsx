
import React, { Component } from "react";
import CoursesCertificate from "./Courses/CoursesCertificate";
import './Certificate.scss';
class Certificates extends Component{

    render(){
        return(
            <div id="Certificates">
                <CoursesCertificate></CoursesCertificate>
                <CoursesCertificate ></CoursesCertificate>
            </div>
        );
    }

}


export default Certificates;