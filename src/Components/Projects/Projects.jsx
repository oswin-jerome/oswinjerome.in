import React,{ Component } from "react";
import cc_python from "../../assets/projects/type.png";
import pp_myweb from "../../assets/projects/myweb.png";
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
                        proj_id: 1,
                        link: 'https://oswin1998.cf/'
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