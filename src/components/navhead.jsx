import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

import '../styles/navhead.css';

 import Contact from '../components/contact';

/* import Contact from '../components/contact';
import ErrorCompont from '../components/errorCompont';
import About from '../components/About'; */


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
        {/*  <Router>

          <div>
                 <nav id="bg-light" className="navbar navbar-expand-lg navbar-light bg-light">
        <Link exact strict to={"/"} className="navbar-brand nav-item"> Home</Link>       
        <Link exact strict to={"/contact"} className="navbar-brand nav-item"> Contact</Link>       
        </nav>
     <Link  to={"/about"} className="navbar-brand nav-item" > About</Link> 
          
            
            <Switch>

              <Route path="/contact" component={Contact} />

            </Switch>
          </div>
        </Router>*/}

      </div>
    );
  }
}

export default Navhead;