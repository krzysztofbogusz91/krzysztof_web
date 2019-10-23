import React, { Component } from 'react'
import './About.scss'
 interface I_hex {
    id: number; 
    imgUrl: string; 
    text: string; 
    visible: boolean;
}
export default class About extends Component<{},{ gridSetup: I_hex[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            gridSetup: [
                {id: 1, imgUrl: '', text: '', visible: true,},
                {id: 2, imgUrl: '', text: "Hi, I'm Krzysztof Poznań (Poland) based developer, but i mostly work remotely", visible: true,},
                {id: 3, imgUrl: '', text: '', visible: true,},
                {id: 4, text: 'My stack is based on JavaScript - I work with Angular2+, React and Vue', imgUrl: '', visible: true,},
                {id: 5, imgUrl: '', text: '', visible: true,},
                {id: 6, imgUrl: '', text: '', visible: true,},
                {id: 7, text: 'Node is my environment for backend dev, I`v done projects with Express and MongoDb', imgUrl: '', visible: true,},
                {id: 8, imgUrl: '', text: '', visible: false,},
                {id: 9, imgUrl: '', text: '', visible: true,},
                {id: 10, imgUrl: '', text: '', visible: true,},
                {id: 11, imgUrl: '', text: '', visible: false,},
                {id: 12, imgUrl: '', text: '', visible: true,},
                {id: 13, imgUrl: '', text: '', visible: true,},
                {id: 14, imgUrl: '', text: '', visible: false,},
                {id: 15, imgUrl: '', text: '', visible: true,},
            ],
        }
    }


    render() {
        const createHexagonList = (setup: I_hex[]) => {
            return setup.map((hex: I_hex) =>(
                <li key={hex.id} className={hex.visible ? 'hex' : 'hex hidden'}>
                    <div className="hexIn">
                        <div className="hexLink">
                            {!hex.text ? 
                            <div className='img' >

                            </div> 
                            :
                            <div className='img'>
                                <span>
                                    {hex.text}
                                </span>
                            </div>  }
                    </div>
                </div>
            </li>
            ))
        }

        const hexList = createHexagonList(this.state.gridSetup);
       
        return (
            <div  id="about">
                <div className="about">

                <div className="parentSection">
                    <div className="grid">
                        <ul className="hexGrid">
                            {hexList}
                        </ul>
                    </div>
                </div>
                </div>
            </div> )
    }
}
