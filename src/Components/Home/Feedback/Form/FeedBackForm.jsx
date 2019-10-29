import React,{ Component } from "react";
import axios from "axios";
import './FeedBackForm.scss'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/lib/ReactCrop.scss';
class FeedBackForm extends Component {
        state = {  
                name:'',
                crop: {
                        unit: '%', // default, can be 'px' or '%'
                        x: 1,
                        y: 5,
                        aspect:1/1,
                        height:10,
                        width:10,
                        th:0,tw:0
                }
        }

        submit=(e)=>{
                
                e.preventDefault()

                // var pic = document.querySelector(".ReactCrop__image");
                // var imageHeight = pic.height;
                // var imageWidth = pic.width;
                // alert(imageWidth)
                function percent(cp,im){
                        console.log(cp+" "+im)
                        var p = (cp*100)/im;//322.74 2371
                        console.log(p)
                        return p;
                }
                const form = new FormData();
                form.append('avatar', this.state.avatar);
                form.append('name', this.state.name);
                form.append('content', this.state.msg);
                // form.append('x', percent(this.state.crop.x, imageWidth));
                // form.append('y', percent(this.state.crop.y, imageHeight));
                // form.append('w', percent(this.state.crop.width,imageWidth));
                // form.append('h', percent(this.state.crop.height,imageHeight));
                // form.append('ow', this.state.tw);
                // form.append('oh', this.state.th);
                const config = {
                        headers: {
                                'content-type': 'multipart/form-data'
                        }
                };
                // axios.po
                
                     
        }


       

        render() { 

                this.submit = this.submit.bind(this)
                return ( 
                        <div id="fbf">
                        <p className="fbfTitle">Feedback</p>

                        <form id="fbfForm" onSubmit={this.submit} >
                                <div>
                                        <p>Name : </p>
                                        <input value={this.state.name} type="text" name="fbfName" id="fbfName" placeholder="Your name..." onChange={(e)=>{this.setState({
                                                name:e.target.value
                                        })}}/>
                                </div>
                                <div>
                                        <p>Message : </p>
                                        <textarea name="fbfMsg" placeholder="Your message..." onChange={(e)=>{this.setState({
                                                msg:e.target.value
                                        })}}></textarea>
                                </div>
                                <div>
                                        <p>Upload your photo :</p>
                                        <input onChange={(e)=>{
                                                if (e.target.files && e.target.files[0]) {
                                                        var reader = new FileReader();

                                                        reader.onload = function (e) {
                                                               
                                                                this.setState({f:e.target.result})
                                                        }.bind(this)
                                                        var _URL = window.URL || window.webkitURL;
                                                        console.log("OOOOOOOOOOOOO")
                                                        console.log(e.target.files[0])
                                                        // var img = new Image();
                                                        // img.onload =  ()=> {
                                                        //         this.setState({
                                                        //                 tw:img.width,
                                                        //                 th:img.height
                                                        //         })
                                                        // };
                                                        // img.src = _URL.createObjectURL(e.target.files[0]);
                                                        reader.readAsDataURL(e.target.files[0]);
                                                }
                                                this.setState({
                                                avatar:e.target.files[0]
                                        })
                                        
                                        

                                        }} type="file" name="fbfAvatar" id="fbfAvatar" accept=".jpg,.jpeg,.png" />
                                </div>

                               {/* <div className="cp">
                                       <ReactCrop onChange={crop => {
                                               console.log(crop)
                                               this.setState({ crop });
                                       }}  onDragEnd={(e)=>{
                                               console.log(e)
                                       }} src={this.state.f} crop={this.state.crop} />
                               </div> */}

                                <div>
                                        <button type="submit">SUBMIT</button>
                                </div>
                        </form>
                        </div>
                 );
        }
}
 
export default FeedBackForm;