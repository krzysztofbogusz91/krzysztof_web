import React, { Component } from 'react'
import './Services.scss'

interface I_project {
    id: number;
    header?: string;  
    imgUrl: string; 
    text: string; 
    visible: boolean;
}
export default class Services extends Component<{}, {projects: I_project[]}> {
    constructor(props: any) {
        super(props);
        this.state = {
            projects: [
                {id: 1, imgUrl: 'dev.svg', text: 'lorem ipsum dolor set lorem ipsum ipsum dolor', header: 'Web Development', visible: true,},
                {id: 2, imgUrl: 'responsive.svg', text: '', header: "Responsive Development", visible: true,},
                {id: 3, imgUrl: 'wordpress.svg', text: '', header: 'Worpress Based Custom Websites', visible: true,},
                {id: 4, imgUrl: 'seo.svg', text: '', header: 'SEO Optimization', visible: true,},
                {id: 5, imgUrl: 'test.svg', text: '', header: 'Unit And End To End Testing', visible: true,},
                {id: 6, imgUrl: 'agile.svg', text: '', header: 'Agile', visible: true,},
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
                    <h3 className="project-element__img--text header">{pro.header}</h3>
                    <div className="project-element__img--text-dot--container">
                    <span className="project-element__img--text-dot"></span>

                    </div>
                    <p className="project-element__img--text content">{pro.text}</p>
               
                </div>
                </div>
            </li>
            ))
        }

        const projects = createProjectList(this.state.projects)
        return (
            <div id="services"  className="section portfolio-section">
                <h2 className="portfolio-header">Freelance Software Development</h2>
                <ul className="project-container">
                    {projects}
                </ul>
            </div>
        )
    }
}
