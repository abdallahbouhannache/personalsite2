import React, { Component } from 'react';
import '../styles/contact.css';
import mypic from '../ress/img/ab.JPG';
import Social from "./socials";

class contact extends Component {
    constructor(props) {
        super(props);
        this.state = { hover: false };

    }
    stpic = {
        borderRadius: "50%",
        width: "120px",
        height: "120px",
        position: "relative",
        top: "0",
        left: "40%",
        margin: "10px 0 "
    };

    render() {
        return (
            <div className="contcontact">
                <div id="cd1">
                    <img style={this.stpic} src={mypic} alt="" />
                    <h2 style={{ textAlign: "center" }}>Abdallah Bouhannache</h2>
                    
     
                    <p style={{ textAlign: "left", margin: "20px 0px 25px 10px " }} >
                    hi am  junior web developer and network adminstrator
                    feel free to  contact me on this email:
                     <a className="mail" onMouseOver={() => { this.setState({ hover: true }) }}
                    onMouseOut={() => { this.setState({ hover: false }) }}
                    style={{ color: (this.state.hover ? "blue" : "red"), textDecoration: "none" }}
                    href="http://mail.google.com/">
                    abdallah.bouhannache@gmail.com</a>
                    and on all my socials you find them down the page
                    </p>
                </div>
                <Social />
            </div>

        );
    }
}

export default contact;