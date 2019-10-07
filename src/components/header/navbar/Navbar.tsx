import React, { Component } from 'react'

export default class Navbar extends Component {
    goTo(event: any){
       const text: string = event.target.textContent.toLowerCase();
       return !!text ? (document as any).getElementById(`#${text}`).scrollIntoView() : '';
    }
    render() {
        // TODO li -> to loop
        // TODO fix scroll redux method?
        return ( 
            <div>
              <nav className="nav">
                  <ul className="nav-elements">
                      <li onClick={this.goTo} className="nav-elem">About</li>
                      <li className="nav-elem">Offer</li>
                      <li className="nav-elem">Portfolio</li>
                      <li className="nav-elem">Blog</li>
                      <li className="nav-elem">Contact</li>
                  </ul>
              </nav>
            </div>
        )
    }
}
