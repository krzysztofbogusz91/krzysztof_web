import React, { Component } from 'react'
import { Link } from "react-scroll";
import './Navbar.scss'

export default class Navbar extends Component<{}, {navbarElements: any[], showMenu: boolean, hideMenu: boolean}> {
    constructor(props: any) {
        super(props);
        this.state = {
            navbarElements: [
                {name: 'about'},
                {name: 'portfolio'},
                {name: 'offer'},
                {name: 'blog'},
                {name: 'contact'},
            ],
            showMenu: false,
            hideMenu: false
        }
    }

    toggleShowMenu = () =>{
        if(this.state.showMenu){
            this.toggleHideMenu();
        }else{
            this.setState(prevState => ({showMenu: !prevState.showMenu, hideMenu: false}))
        }
    }

    toggleHideMenu = () =>{
        if(this.state.showMenu){
            this.setState(prevState => ({hideMenu: !prevState.hideMenu, showMenu: false}))
        }
    }

    render() {
        const list = this.state.navbarElements.map((elem: any, i: number) => 
                        (<li key={i} className="nav-list-elem">
                            <Link
                                className="nav-elem" 
                                activeClass="active"
                                onClick={this.toggleHideMenu}
                                to={elem.name}
                                smooth={true}
                                spy={true}
                                duration= {500}
                                offset={-50}
                                >{elem.name}</Link>
                        </li>))
        const showMenu = this.state.showMenu ? 'show' : '';
        const hideMenu = this.state.hideMenu ? 'hide' : '';
        return ( 
            <div className="nav-section">
              <nav className="nav">
                <ul className="nav-elements">
                <li className="nav-list-elem">
                        <Link
                            onClick={this.toggleHideMenu}
                            className="nav-elem logo" 
                            to={"header"}
                            smooth={true}
                            duration= {500}
                            offset={-50}
                            >KB</Link>
                    </li>    
                </ul>
                <ul className={`nav-elements menu ${showMenu} ${hideMenu}`}>
                    {list}
                </ul>
                <ul className={`mobile-show ${showMenu} ${hideMenu}`} onClick={this.toggleShowMenu}>
                    <li className="mobile-show__dash"></li>
                    <li className="mobile-show__dash"></li>
                    <li className="mobile-show__dash"></li>
                </ul>
              </nav>
            </div>
        )
    }
}
