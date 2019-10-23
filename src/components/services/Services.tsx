import React, { Component } from 'react'
import './Services.scss'

interface I_project {
    id: number;
    header?: string;  
    imgUrl: string; 
    text: string; 
    visible: boolean;
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

export default class Services extends Component<{}, {projects: I_project[]}> {
    constructor(props: any) {
        super(props);
        this.state = {
            projects: [
                {id: 1, imgUrl: 'dev.svg', text: lorem, header: 'Web Development', visible: true,},
                {id: 2, imgUrl: 'responsive.svg', text: lorem, header: "Responsive Development", visible: true,},
                {id: 3, imgUrl: 'wordpress.svg', text: lorem, header: 'Worpress Based Custom Websites', visible: true,},
                {id: 4, imgUrl: 'seo.svg', text: lorem, header: 'SEO Optimization', visible: true,},
                {id: 5, imgUrl: 'test.svg', text: lorem, header: 'Unit And End To End Testing', visible: true,},
                {id: 6, imgUrl: 'agile.svg', text: lorem, header: 'Agile', visible: true,},
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
