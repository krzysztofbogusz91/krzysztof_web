import React, { Component } from 'react'
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
    goTo(event: any){
       const text: string = event.target.textContent.toLowerCase();
       return !!text ? (document as any).getElementById(`#${text}`).scrollIntoView() : '';
    }
    render() {
        // TODO li -> to loop
        // TODO fix scroll redux method?
        const list = this.state.navbarElements.map((elem: any) => (<li onClick={this.goTo} className="nav-elem">{elem.name}</li>))

        return ( 
            <div>
              <nav className="nav">
                  <ul className="nav-elements">
                    {list}
                  </ul>
              </nav>
            </div>
        )
    }
}
