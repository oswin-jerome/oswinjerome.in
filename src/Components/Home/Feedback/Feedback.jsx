import React,{ Component } from "react";
import './Feedback.scss';
// import Glide from '@glidejs/glide';
import Modal from 'react-responsive-modal';
// import './glide.theme.min.css';
import Glide, {
    Breakpoints,
    Swipe,Autoplay
} from '@glidejs/glide/dist/glide.modular.esm'
import pic from './propic.jpg';
import left from './leftArrow.svg'
import right from './rightArrow.svg'

import Form from './Form/FeedBackForm'
import Axios from "axios";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding:'0px',
        background:'#fff'
    }
};

const sty = {
        overlay: {
            background: '#fff',
            padding:'0px'
        }, modal:{
            background:"#fff"
        }
    }
// Modal.setAppElement('#root')
class Feedback extends Component {
    state = {
    open: false,
    feedBackData:[],
    test:['s','w'],
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

   
  componentDidUpdate(){
       new Glide('.glide',{
            startAt: 0,
            perView: 1,
            autoplay:3000,
            peek:{before:0,after:0},
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
            Swipe,
            // Autoplay
        })
  }

    componentDidMount(){
        new Glide('.glide',{
            startAt: 0,
            perView: 1,
            autoplay:3000,
            peek:{before:0,after:0},
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
            Swipe,
            // Autoplay
        })
        
        // Axios.get('https://oswin.serveo.net/api/feedback/').then((res) => {
        //     console.log(res.data)
        //     this.setState({feedBackData:res.data})
        // })
        


    }



    render() { 


        return ( 
            <div id="Feedback" className="dark-bg">
            {/* <div className="broken">
                <p>This thing is broken.... Oswin is lazy to fix this</p>
            </div> */}
                <p className="heading">Feedbacks / Testimonies</p>
                <div className="slide">
                    <div className="glide">
                    <div data-glide-el="track" className="glide__track">
                        <div className="glide__slides">

                        
                             {
                                this.state.feedBackData.map((f)=>{
                                        console.log(f._id)
                                        return <div key={f._id} className="glide__slide">
                                    {/* <div  className="feed_card">
                                        {f.image!=undefined?<img src={"https://oswin.serveo.net/"+f.image} alt=""/>:null}
                                        <div className="cont">
                                            <p className="msg">{f.content}</p>
                                        <p className="authName">- {f.name}</p>
                                        </div>
                                    </div> */}
                                </div>
                                                
                                    })
                            }
                    
                    {/* <div className="glide__slide">
                        <div className="feed_card">
                            <img src={pic} alt=""/>
                            <div className="cont">
                                <p className="msg">sdsdsdsdsdsd Lorem ipsum dolor sit amet.</p>
                            <p className="authName">- me</p>
                            </div>
                        </div>
                    </div> */}

                            
                        </div>
                        <div className="glide__arrows" data-glide-el="controls">
                            <img src={left} alt="" className="glide__arrow glide__arrow--left" data-glide-dir="<"/>
                            <img src={right} alt="" className="glide__arrow glide__arrow--right" data-glide-dir=">"/>
                        </div>
                    </div>
                    
                </div>

               
                
                </div>
            
                <Modal classNames={{
                        overlay: 'Overlay',
                        modal: "Model",
                        }} showCloseIcon={true} open={this.state.open} onClose={this.onCloseModal} center>
                    <Form onOver={(data)=>{
                        this.setState({
                            open: false,
                            feedBackData:[this.state.feedBackData,data]
                        })
                    }}></Form>
                </Modal>


                <div className="gvFeed">
                    <button onClick={()=>{this.setState({open:true})}}>Give Your Feed back</button>
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

class SingleSlide extends Component{

    render(){
        return(
            <div className="glide__slide">
                {/* <div className="feed_card">
                    <img src={"https://oswin.serveo.net/"+this.props.pic} alt=""/>
                    <div className="cont">
                        <p className="msg">{this.props.cont}</p>
                    <p className="authName">- {this.props.name}</p>
                    </div>
                </div> */}
            </div>
        )
    }
}