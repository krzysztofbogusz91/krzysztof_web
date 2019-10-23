import React, { Component } from 'react'
import './Services.scss'

interface I_project {
    id: number; 
    imgUrl: string; 
    text: string; 
    visible: boolean;
}
export default class Services extends Component<{}, {projects: I_project[]}> {
    constructor(props: any) {
        super(props);
        this.state = {
            projects: [
                {id: 1, imgUrl: 'dev.svg', text: 'Web Development', visible: true,},
                {id: 2, imgUrl: 'responsive.svg', text: "Responsive Development", visible: true,},
                {id: 3, imgUrl: 'wordpress.svg', text: 'Worpress Based Custom Websites', visible: true,},
                {id: 4, imgUrl: 'seo.svg', text: 'SEO Optimization', visible: true,},
                {id: 5, imgUrl: 'test.svg', text: 'SEO Optimization', visible: true,},
                {id: 6, imgUrl: 'agile.svg', text: 'Agile', visible: true,},
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
                <h2 className="portfolio-header">Freelance Software Development</h2>
                <ul className="project-container">
                    {projects}
                </ul>
            </div>
        )
    }
}
