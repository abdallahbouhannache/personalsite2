import React, { Component } from 'react'
import '../styles/About.css'
import   Social from "./socials";



class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
            styl = { color: 'red' };
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
                           
                        <ul id="prg" className="ulcont lst">
                            <h4 style={this.styl}> PROGRAMMING && SOFTWARE DEV:   </h4>
                            <li className="liste">java and javafx</li>
                            <li className="liste">python</li>
                            <li className="liste">html,css,js</li>
                            <li className="liste">reactjs</li>
                            <li className="liste">...</li>
                        </ul>
                                                                              
                        <ul id="Os" className="ulcont lst">
                            <h4 style={this.styl}>  System Adminstration && Database:</h4>
                            <li className="liste">linux terminal basic && bash </li>
                            <li className="liste">MySql,sql</li>
                        </ul>
                        
                    <ul id="langs" className="ulcont lst">     
                        <h4 style={this.styl}> LANGUAGES:         </h4>
                        
                        <li className="liste">       Arabic:Native,         </li>
                        <li className="liste">      French:Read ,Write,Speak.         </li>
                        <li className="liste">      English:Read ,Write,Speak.         </li>
                        </ul>
                        
                    <ul className="liste">      
                        <h4 style={this.styl}>WORK:</h4>
                    </ul>
                        <li className="liste">      EMAIL:abdallah.bouhannache@gmail.com</li>
                        <li className="liste">      PHONE_N°:00213696911757     </li> 

                    <Social/>
     
                    </ul>
                

            </div>

        );
    }
}

export default About;





