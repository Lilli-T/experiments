// elements for links page
// headers are elements
// words are an element
// icons are components
// links are components

import React from 'react';
import './projects.css';
import Techs from './techs.js';
import Examples from './examples.js';

class Projects extends React.Component {
    render() {
        return (
            <div id = 'projects' className="headers">
                <h2 className="top-header">
                    Projects
                </h2>
                <Techs />
                <Examples />
            </div>
        )
    }
}

export default Projects