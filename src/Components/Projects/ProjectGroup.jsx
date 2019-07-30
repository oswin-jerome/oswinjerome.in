import React, { Component } from "react";
import SingleProject from "./SingleCard/SingleProject";
class ProjectGroup extends Component {
    state = {  }
    render() { 
        let projects = this.props.list;
        return ( 
            <div id="projGroup" className="spaceAround">
                <h1 className="heading">{this.props.title}</h1>
                <div className="projectsContainer">
                    {
                        projects.map((sP)=>{
                            return <SingleProject  key={sP.proj_id} img={sP.pic} title={sP.title} link={sP.link}></SingleProject>
                        })
                    }
                </div>
            </div>
        );
    }
}
 
export default ProjectGroup;