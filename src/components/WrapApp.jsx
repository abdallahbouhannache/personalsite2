import React, { Component } from 'react';
import Bodysection from './bodysection';
import Navhead from './navhead';

class WrapApp extends Component {
     constructor(props) {
         super(props);
         this.state = {  };
     }
     render() {
         return (
             <div>
                 <Navhead /> 

                 <Bodysection />  
             </div>
         );
     }
 }
 
 export default WrapApp;