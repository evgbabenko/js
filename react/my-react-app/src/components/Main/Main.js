import { Component } from 'react';
import React from 'react';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <section>
                <div>
                    {this.props.about.join('\r\n')}
                </div>
            </section>
        )
    }
}
export default Main;