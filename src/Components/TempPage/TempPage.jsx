

import React, { Component } from "react";

import axios from "axios";

class TempPage extends Component{

    state={
        avatar:''
    }
    render(){
        return(
            <div>
                <form onSubmit={(e)=>{
                    e.preventDefault()

                    const form = new FormData();
                    form.append('avatar',this.state.avatar[0]);
                    form.append('name',this.state.name);
                    form.append('content',this.state.content);
                    const config = {
                        headers: {
                            'content-type': 'multipart/form-data'
                        }
                    };
                    axios.post("https://oswinjerome-in-server.herokuapp.com/api/feedback/", form, config)
                        .then((response) => {
                            alert("The file is successfully uploaded");
                        }).catch((error) => {});
                }}>
                    <input type="text" name="Name" id="name" onChange={(e)=>{this.setState({name:e.target.value})}}/>
                    <input type="text" name="Content" id="Content" onChange={(e)=>{this.setState({content:e.target.value})}}/>
                    <input  type="file" name="avatar" id="avatar" onChange={(e)=>{this.setState({avatar:e.target.files})}}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }

}


export default TempPage;