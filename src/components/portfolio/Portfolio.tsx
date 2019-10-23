import React, { Component } from 'react'
import './Portfolio.scss'
interface I_project {
    id: number; 
    imgUrl: string; 
    text: string; 
    visible: boolean;
}
export default class Portfolio extends Component<{}, {projects: I_project[]}> {
    constructor(props: any) {
        super(props);
        this.state = {
            projects: [
                {id: 1, imgUrl: 'website-scribble-c.jpg', text: 'Project 1', visible: true,},
                {id: 2, imgUrl: 'website-scribble-c.jpg', text: "Project 2", visible: true,},
                {id: 3, imgUrl: 'website-scribble-c.jpg', text: 'Project 3', visible: true,},
                {id: 4, imgUrl: 'website-scribble-c.jpg', text: 'Project 4', visible: true,},
            ],
        }
    }

    render() {
        const createProjectList = (setup: I_project[]) => {
            return setup.map((pro: I_project) =>(
            <li className="project-element" key={pro.id} >
                <div className="project-element__img--container">
                <img className="project-element__img" src={window.location.origin + '/images/' + pro.imgUrl} alt="project_picture"/>
                <div className="project-element__img--text__container">
                    <p className="project-element__img--text">{pro.text}</p>
                </div>
                </div>
            </li>
            ))
        }

        const projects = createProjectList(this.state.projects)
        return (
            <div id="portfolio"  className="section portfolio-section">
                <h2 className="portfolio-header">Experience</h2>
                <ul className="project-container">
                    {projects}
                </ul>
            </div>
        )
    }
}
