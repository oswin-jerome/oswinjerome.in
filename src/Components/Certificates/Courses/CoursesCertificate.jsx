

import React, { Component } from "react";
import './CoursesCertificate.scss'
import cc_python from "../../../assets/certificates/python.jpg";
import SingleCertificate from "../SingleCertificate";
class CoursesCertificates extends Component{

    render(){
        return(
            <div id="CoursesCertificate" className="spaceAround">
                <h1 className="heading">Courses Certificates</h1>
                <div className="certificateContainer">
                        <SingleCertificate img={cc_python} title="Python"></SingleCertificate>
                        <SingleCertificate img={cc_python} title="Python"></SingleCertificate>
                        <SingleCertificate img={cc_python} title="Python"></SingleCertificate>
                        <SingleCertificate img={cc_python} title="Python"></SingleCertificate>
                        <SingleCertificate img={cc_python} title="Python"></SingleCertificate>
                        <SingleCertificate img={cc_python} title="Python"></SingleCertificate>
                        <SingleCertificate img={cc_python} title="Python"></SingleCertificate>
                        <SingleCertificate img={cc_python} title="Python"></SingleCertificate>
                </div>
            </div>
        );
    }

}


export default CoursesCertificates;