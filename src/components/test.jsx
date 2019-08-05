import React, { Component } from 'react'


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    change (event) {
        console.log(event.target.value)
    }
    render() {
        console.log('afgza');
        return (
            <div>
                <select id="lang" onChange={this.change} >
                    <option value="select">Select</option>
                    <option value="Java">Java</option>
                    <option value="C++">C++</option>
                    
                </select>
                <p></p>
                
                
            </div>


 
       



        );
    }
}

export default Test;