import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import WrapApp from './components/WrapApp'; 
import Contact from './components/contact';

import ErrorCompont from './components/errorCompont';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router >
          <div>
            <nav id="bg-light" className="navbar navbar-expand-lg navbar-light bg-light">
              <Link /* exact strict */ to={"/"} className="navbar-brand nav-item"> Home</Link>
              <Link to={"/contact"} className="navbar-brand nav-item"> Contact</Link>
              {/* <Link to={"/portfolio"} className="navbar-brand nav-item"> Portfolio</Link> */}
              

            </nav>
            <Switch>
              <Route path="/" component={WrapApp} exact={true}/>    
              <Route   path="/contact" component={Contact} />
              {/* <Route path="/about" component={About} /> */}
              {/* <Route path="/portfolio" component={About} /> */}
              <Route component ={ErrorCompont}     />
            </Switch>
          </div>
          </Router>

      </div>
    );
  }
}

export default App;
