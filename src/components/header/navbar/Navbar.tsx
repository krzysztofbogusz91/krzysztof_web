import React, { Component } from 'react'
import { Link } from "react-scroll";
import './Navbar.scss'

export default class Navbar extends Component<{}, {navbarElements: any[]}> {
    constructor(props: any) {
        super(props);
        this.state = {
            navbarElements: [
                {name: 'about'},
                {name: 'portfolio'},
                {name: 'offer'},
                {name: 'blog'},
                {name: 'contact'},
            ]
        }
    }

    render() {
        const list = this.state.navbarElements.map((elem: any, i: number) => 
                        (<li key={i} className="nav-list-elem">
                            <Link
                                className="nav-elem" 
                                activeClass="active"
                                to={elem.name}
                                smooth={true}
                                spy={true}
                                duration= {500}
                                offset={-50}
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
