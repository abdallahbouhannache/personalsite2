import React, { Component } from 'react'
import '../styles/About.css'



class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="about">
                
                    <ul id="cont" className="ulcont">
                        <li className="liste">  NAME:ABDALLAH     </li>
                        <li className="liste">      LAST_NAME:BOUHANNACHE</li>
                        <ul className="liste">
                          SKILLS:         
                        <li className="liste">lan networks creation and troubleshooting  </li>
                        <li className="liste">routing and switching configuration</li>
                        <li className="liste">...</li>
                        </ul>
                           
                        <ul id="prg" className="ulcont liste">
                             PROGRAMMING:   
                            <li className="liste">java</li>
                            <li className="liste">python</li>
                            <li className="liste">html,css,js</li>
                            <li className="liste">reactjs</li>
                            <li className="liste">...</li>
                        </ul>
                                                                              
                    <ul id="labs" className="ulcont liste">      NETWORKS:         </ul>
                        
                        <ul id ="langs" className="ulcont liste">     LANGUAGES:         
                        
                        <li className="liste">       Arabic:Native,         </li>
                        <li className="liste">      French:Read ,Write,Speak.         </li>
                        <li className="liste">      English:Read ,Write,Speak.         </li>
                        </ul>

                        <li className="liste">      WORK:         </li>
                        <li className="liste">      EMAIL:abdallah.bouhannache@gmail.com</li>
                        <li className="liste">      PHONE_N°:00213696911757     </li> 


                        <li className="liste0" id="social">  <a className="socials" href="https://www.facebook.com/abdelah.bouhanneche"> <img className="st" src={require('../ress/img/fb.svg')} alt="" /> </a>
     <a className="socials" href="https://github.com/abdallahbouhannache">     <img className="st" src={require('../ress/img/twitter.svg')} alt="" /> </a>  
     <a className="socials" href="https://twitter.com/abdallahbouhann">     <img className="st" src={require('../ress/img/github.svg')} alt="" /> </a>
     <a className="socials" href="https://stackoverflow.com/users/3252690/abdallah-bouhannache">    <img className="st" src={require('../ress/img/stackov.svg')} alt="" /> </a> </li> 
                    </ul>
                

            </div>

        );
    }
}

export default About;





