import React, { Component } from 'react';
import '../styles/element.css'

class element extends Component {
    constructor(props) {
        super(props);
        this.state = { desc:'this is just for you' };
    }
    render() {
     
                
        return (

         <React.Fragment>
            <a id="pg" href={this.props.url}>
                    
            <div id="eldt">
                        <h1>{this.props.data}</h1>
                        <img id="bgsite" src={require('../ress/img/' + this.props.pict)} alt="failed to load"/>            
            </div>
            </a>
            </React.Fragment>
        );
    }
}

export default element;