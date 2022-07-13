import { Component } from 'react';
import React from 'react';
import './Aside.css';
import SwiftSlider from 'react-swift-slider';

class Aside extends Component {
    render() {
        let banner = this.props.data;
        return (
            <section>
                <div className='banner'>
                    <SwiftSlider data={banner} height={400} showDots={true} enableNextAndPrev={true} />
                </div>
                <div className='about'>
                    {this.props.about.join('\r\n')}
                </div>
            </section>
        )
    }
}
export default Aside;