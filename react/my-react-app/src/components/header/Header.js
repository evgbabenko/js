import React, { Component } from 'react';
import './Header.css';
    
class Header extends Component {
    render() {
        return (
            <header>
                <section className="header">
                    <div className="logo">
                        <img src={this.props.logo} alt="logo" />
                    </div>
                    <nav>
                        <ul>
                            {this.props.items.map((item, index) => <li><a href={item.url} key={index}>{item.name}</a></li>)}
                        </ul>
                    </nav>
                </section>
            </header>
        )
    }
}
export default Header;