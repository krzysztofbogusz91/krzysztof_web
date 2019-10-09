import React, { Component } from 'react'
import './About.scss'
export default class About extends Component {
    render() {
        return (
            <div id="about" className="section">
                <section>
                    <h2>About me</h2>
                    <article>
                        <span>Hi, I`m Krzysztof Poznań (Poland) based developer, but i mostly work remotely</span>
                    </article>
                    <article>
                        <span>My stack is based on JavaScript - I work with Angular2+, React, Vue and Vanilla.js</span>
                    </article>
                    <article>
                        <span>Node is my environment for backend dev, I`v done some projects with Express and MongoDb</span>
                    </article>
                </section>
            </div>
        )
    }
}
