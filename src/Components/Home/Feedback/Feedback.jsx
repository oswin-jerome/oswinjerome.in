import React,{ Component } from "react";
import './Feedback.scss';
// import Glide from '@glidejs/glide';

// import './glide.theme.min.css';
import Glide, {
    Breakpoints,
    Swipe,Autoplay
} from '@glidejs/glide/dist/glide.modular.esm'
import pic from './propic.jpg';
import left from './leftArrow.svg'
import right from './rightArrow.svg'


class Feedback extends Component {
    state = {  }

    componentDidMount(){
        new Glide('.glide',{
            startAt: 0,
            perView: 1,
            autoplay:3000,
            // peek:{before:0,after:0}
            // type: 'carousel',
            breakpoints: {
                2000: {
                    perView: 3,
                    autoplay: false,
                },
                1050:{
                    perView:2
                },
                870:{
                    perView:1
                },
            },
        }).mount({
            Breakpoints,
            Swipe, Autoplay
        })
        
    }


    render() { 
        return ( 
            <div id="Feedback" className="dark-bg">
                <p className="heading">Feedbacks / Testimonies</p>
                <div className="slide">
                    <div className="glide">
                    <div data-glide-el="track" className="glide__track">
                        <div className="glide__slides">

                            <div className="glide__slide">
                                <div className="feed_card">
                                    <img src={pic} alt=""/>
                                    <div className="cont">
                                        <p className="msg">1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque nulla ratione.</p>
                                    <p className="authName">- Oswin Jerome</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glide__slide">
                                <div className="feed_card">
                                    <img src={pic} alt=""/>
                                    <div className="cont">
                                        <p className="msg">2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque nulla ratione.</p>
                                    <p className="authName">- Oswin Jerome</p>
                                    </div>
                                </div>
                            </div>
                            <div className="glide__slide">
                                <div className="feed_card">
                                    <img src={pic} alt=""/>
                                    <div className="cont">
                                        <p className="msg">3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque nulla ratione.</p>
                                    <p className="authName">- Oswin Jerome</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="glide__arrows" data-glide-el="controls">
                            <img src={left} alt="" className="glide__arrow glide__arrow--left" data-glide-dir="<"/>
                            <img src={right} alt="" className="glide__arrow glide__arrow--right" data-glide-dir=">"/>
                        </div>
                    </div>
                    
                </div>
                
                </div>
            
            </div>
        );
    }
}
 
export default Feedback;


{/* <div className="feed_card">
                                    <img src={pic} alt=""/>
                                    <div className="cont">
                                        <p className="msg">1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque nulla ratione.</p>
                                    <p className="authName">- Oswin Jerome</p>
                                    </div>
                                </div> */}