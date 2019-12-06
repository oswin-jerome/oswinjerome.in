import React,{ Component } from "react";
import cc_python from "../../assets/projects/type.png";
import pp_myweb from "../../assets/projects/myweb.png";
import pp_wetherapp from "../../assets/projects/weatherapp.png";
import pp_compressor from "../../assets/projects/compressor.png";
import pp_binary_clock from "../../assets/projects/f_binary_clock.jpg";
import "./Projects.scss";

import ProjectGroup from "./ProjectGroup";

class Projects extends Component {
    state = {  }
    render() { 
        const data = [{
                groupTitle: "React JS",
                groupID: 1,
                projects: [
                    {
                        title: "Type (Desktop only site)",
                        pic: cc_python,
                        proj_id: 1,
                        link: 'https://type-speed-oswin.firebaseapp.com/'
                    }, 
                    {
                        title: "My Website",
                        pic: pp_myweb,
                        proj_id: 2,
                        link: 'https://oswin1998.cf/'
                    }, 
                    {
                        title: "Image compressor",
                        pic: pp_compressor,
                        proj_id: 3,
                        link: 'https://oswin-jerome.github.io/my-static-web/staticapps/projects/reactjs/image-compressor/'
                    }, 
            ]

            },
            {
                groupID: 2,
                groupTitle: "Flutter",
                projects:[
                    {
                        title:"Weather app",
                        pic: pp_wetherapp,
                        proj_id: 4,
                        link: 'https://oswin-jerome.github.io/my-static-web/staticapps/projects/weather-app-flutter/'
                    },
                    {
                        title:"Binary Clock",
                        pic: pp_binary_clock,
                        proj_id: 5,
                        link: 'https://oswin-jerome.github.io/my-static-web/staticapps/projects/flutter/binary_clock/'
                    },
                    
                ]

            },
            // {
            //     groupID: 2,
            //     groupTitle: "Flutter",
            //     projects:[
            //         {
            //             title:"course tite",
            //             pic: cc_python,
            //             proj_id: 4
            //         },
            //         {
            //             title:"course tite",
            //             pic: cc_python,
            //             proj_id: 5
            //         },
            //     ]

            // },
        ]
        return ( 
            <div id="projects">
                {
                    data.map((group)=>{
                        return <ProjectGroup key={group.groupID} title={group.groupTitle} list={group.projects}></ProjectGroup>
                    })
                }
            </div> 
        );
    }
}
 
export default Projects;