

import React, { Component } from "react";
import './CertificateGroup.scss'

import SingleCertificate from "../SingleCertificate";
class CertificateGroup extends Component{
    
    render(){
        const CertificateList = this.props.list;
        return(
            <div id="CoursesCertificate" className="spaceAround">
                <h1 className="heading">{this.props.title}</h1>
                <div className="certificateContainer">
                        {/* <SingleCertificate img={cc_python} title="Python"></SingleCertificate>
                        <SingleCertificate img={cc_python} title="Python"></SingleCertificate>
                        <SingleCertificate img={cc_python} title="Python"></SingleCertificate>
                        <SingleCertificate img={cc_python} title="Python"></SingleCertificate>
                        <SingleCertificate img={cc_python} title="Python"></SingleCertificate>
                        <SingleCertificate img={cc_python} title="Python"></SingleCertificate>
                        <SingleCertificate img={cc_python} title="Python"></SingleCertificate>
                        <SingleCertificate img={cc_python} title="Python"></SingleCertificate> */}
                        {
                           CertificateList.map((Certificate)=>{
                               return  <SingleCertificate key={Certificate.cert_id} img={Certificate.pic} title={Certificate.title}></SingleCertificate>
                           })
                        }

                </div>
            </div>
        );
    }

}


export default CertificateGroup;