import { Component } from 'react';
import React from 'react';
import './Button.css';

class Button extends Component {
    constructor() {
        super();

        this.state = {
            clicked: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: true
        });
        alert('Клик-Клик');
    }
    render() {
        return(
        <button onClick={this.handleClick} className={this.props.color}>{this.props.value}</button>
        )
    }
}
export default Button;