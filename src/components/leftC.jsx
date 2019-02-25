import React, { Component } from 'react';
import '../styles/leftC.css';

class LeftC extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="wrpleft">
                <h1>List of languages i have used</h1>
                <label htmlFor="search">search</label>
                <input id="search" type="text" placeholder="location"/>
                <input type="button" />  
            </div>

        );
    }
}

export default LeftC;