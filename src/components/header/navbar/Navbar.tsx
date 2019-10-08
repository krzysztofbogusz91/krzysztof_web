import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.scss'

export default class Navbar extends Component<{}, {navbarElements: any[]}> {
    constructor(props: any) {
        super(props);
        this.state = {
            navbarElements: [
                {name: 'about'},
                {name: 'offer'},
                {name: 'portfolio'},
                {name: 'blog'},
                {name: 'contact'},
            ]
        }
    }

    render() {
        const list = this.state.navbarElements.map((elem: any, i: number) => 
                        (<li key={i} className="nav-elem">
                            <Link 
                                to={elem.name}
                                smooth={true}
                                duration= {500}
                                offset={-30}
                                >{elem.name}</Link>
                        </li>))

        return ( 
            <div className="nav-section">
              <nav className="nav">
                  <ul className="nav-elements">
                    {list}
                  </ul>
              </nav>
            </div>
        )
    }
}
