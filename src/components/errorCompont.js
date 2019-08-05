import React, { Component } from 'react';
class errorCompont extends Component {
    state = {  }
    render() {
        return (
            <div>
    <h1>it must be something wrong{this.props.ErrorInfo}</h1>

            </div>
        );
    }
}

export default errorCompont;