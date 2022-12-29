// elements for expereince page
// words are an element
// header is an element

import React from 'react';
import './experience.css';

class Experience extends React.Component {
    render() {
        return (
            <div id = "experience" className="exp-text">
                <h2>
                    Experience
                </h2>
                <p>
                    I'm currently on the teaching team for the class CSE 373: <br />
                    <span className="highlight-0be7fb">Data Structures and Algorithms</span>. <br /> <br />
                    My roles so far: <br />
                    Teaching Assistant <br />
                    Section Team Leader <br /> <br />
                    I've made teaching materials, led small classes, 
                    created feedback forms, and collaborated with wonderful staff 
                    to create an <span className="highlight-0be7fb">encouraging learning environment</span>.
                     This coming quarter, I will be leading the 
                    management team. <br /> <br />
                    I love seeing the many possible approaches
                    to create a working solution. Designing data structures
                    and algorithms is the best mix
                    between <span className="highlight-0be7fb">mechanics</span> and <span className="highlight-0be7fb">creativity</span>.
                </p>
            </div>
        )
    }
}

export default Experience