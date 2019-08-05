import React, { Component } from 'react';
import "../styles/socials.css"

class socials extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div id="solinks">                
       <a className="sol s1" href="https://www.facebook.com/abdelah.bouhanneche"> <img className="solimg soimg1" src={require('../ress/img/fb.svg')} alt="" /> </a>
     <a className="sol s2" href="https://github.com/abdallahbouhannache">     <img className="solimg soimg2" src={require('../ress/img/twitter.svg')} alt="" /> </a>  
     <a className="sol s3" href="https://twitter.com/abdallahbouhann">     <img className="solimg soimg3" src={require('../ress/img/github.svg')} alt="" /> </a>
     <a className="sol s4" href="https://stackoverflow.com/users/3252690/abdallah-bouhannache"><img className="solimg soimg4" src={require('../ress/img/stackov.svg')} alt="" /> </a> 
            </div>
                
        );
    }
}

export default socials;