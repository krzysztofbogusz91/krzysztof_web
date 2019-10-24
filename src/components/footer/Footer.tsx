import React, { Component } from 'react'
import './Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <div id="footer"  className="footer">
                <div className="footer-div">
                    <span className="footer-span">KB</span>
                    <span className="footer-span">Software Development Krzysztof Bogusz @2019</span>
                </div>
            </div>
        )
    }
}

