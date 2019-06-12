
import React, { Component } from "react";
import CertificateGroup from "./Group/CertificateGroup";
import './Certificate.scss';
import cc_python from "../../assets/certificates/python.jpg";
class Certificates extends Component{

    render(){

        const d ="Hello world"
        
        const data = [
            {
                groupTitle: "Courses Group",
                groupID:1,
                certificates:[
                    {
                        title:"course tite",
                        pic:cc_python,
                        cert_id:1
                    },
                    {
                        title:"course tite 2",
                        pic:cc_python,
                        cert_id: 2
                    },
                    {
                        title:"course tite 3",
                        pic:cc_python,
                        cert_id: 3
                    },
                ]
                
            },
            // {
            //     groupID: 2,
            //     groupTitle: "Courses Group 2",
            //     certificates:[
            //         {
            //             title:"course tite",
            //             pic: cc_python,
            //             cert_id: 4
            //         },
            //         {
            //             title:"course tite",
            //             pic: cc_python,
            //             cert_id: 5
            //         },
            //     ]
                
            // },
        ]

        return(
            
            <div id="Certificates">
                {
                    data.map((group)=>{
                        return <CertificateGroup key={group.groupID} title={group.groupTitle} list={group.certificates}></CertificateGroup>
                    })
                }
                {/* <CertificateGroup title="Course Certificates" list={[{title:"sds"}]}></CertificateGroup>
                <CertificateGroup title="Competition certificate" ></CertificateGroup> */}
                {
                    console.log(typeof(data))
                }
            </div>
        );
    }

}


export default Certificates;