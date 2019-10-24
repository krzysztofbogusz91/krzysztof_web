import React, { Component } from 'react';
import './Contact.scss';


export default class Contact extends Component {
    render() {
        return (
            <div id="contact" className="contact">
                <h2 className="contact-header">Reach Me Out!</h2>
                <div className="contact__form">
                    <form className="contact__form--form">
                        <div className="contact__form--group">
                            <label className="contact__form--label name">
                                Name: 
                            </label>
                            <input className="contact__form--input name" />
                        </div>
                        <div className="contact__form--group">
                            <label className="contact__form--label email">
                                Email: 
                            </label>
                            <input className="contact__form--input email" />
                        </div>
                        <div className="contact__form--group">
                            <label className="contact__form--label msg">
                                Message: 
                            </label>
                            <textarea className="contact__form--textarea msg" />
                        </div>
                        <div className="contact__form--group">
                            <button className="contact__form--button button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
