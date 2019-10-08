import React, { Component } from 'react'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'

export default class Header extends Component {
    render() {
        return ( 
            <div id="header">
                <Navbar/>
                <Hero/>
            </div>
        )
    }
}
