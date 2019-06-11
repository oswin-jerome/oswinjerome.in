


import React,{Component} from 'react';

import './Langs.scss'

// Images import

import c from './c.svg';
import cpp from './cpp.svg';
import dart from './dart.svg';
import java from './java.svg';
import js from './js.svg';
import php from './php.svg';
import py from './py.svg';
import ts from './ts.svg';
import cs from './cs.png';
import question from './question-sign.svg'
class LAngs extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="Langs">
                <p className="heading"><span className="high">Programing</span> Langs I know.</p>

                <div className="content">
                    <img src={c} alt=""/>
                    <img src={cpp} alt=""/>
                    <img src={dart} alt=""/>
                    <img src={java} alt=""/>
                    <img src={js} alt=""/>
                    <img src={php} alt=""/>
                    <img src={py} alt=""/>
                    <img src={ts} alt=""/>
                    <img src={cs} alt=""/>
                    <img src={question} alt=""/>
                </div>
            </div>
        );
    }
}
 
export default LAngs;