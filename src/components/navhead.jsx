import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

import '../styles/navhead.css';



class Navhead extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="container">
        <img id="bg" src={require("../ress/img/bgh.jpg")} alt="problem_in_loading" />
        <img id="mypic" src={require("../ress/img/ab.JPG")} alt="problem_in_loading" />  
      </div>
    );
  }
}

export default Navhead;