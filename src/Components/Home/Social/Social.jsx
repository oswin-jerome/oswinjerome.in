import React,{Component} from 'react';
import './Social.scss'
import $ from 'jquery'
import fb from './fb.svg';
import gp from './gp.svg';
import insta from './insta.svg';
import tw from './tw.svg';

class Social extends Component{
    state={

    }

    componentDidMount(){
         $('#Social').on('appear',()=>{
             alert(0)
         })
    }

    render(){
        return(
            <div id="Social" className="dark-bg">
                <p className="heading">Follow me on.</p>
                <div className="social-links">
                    <a target="_blank" href="https://www.facebook.com/oswin.jerome"><img src={fb} alt=""/></a>
                    <a target="_blank" href=""><img src={gp} alt=""/></a>
                    <a target="_blank" href="https://www.instagram.com/oswin_jerome/"><img src={insta} alt=""/></a>
                    <a target="_blank" href="https://twitter.com/oswin_jerome"><img src={tw} alt=""/></a>
                </div>
            </div>
        )
    }
}

export default Social;