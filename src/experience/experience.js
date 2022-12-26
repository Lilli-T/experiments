// elements for expereince page
// words are an element
// header is an element

import React from 'react';
import './experience.css';

class Experience extends React.Component {
    render() {
        return (
            <div id = "experience" className="text">
                <h2>
                Experience
                </h2>
                <p>
                I'm currently on the teaching team for the class CSE 373:
                Data Structures and Algorithms.
                </p>
                <p>
                My roles so far:
                Teaching Assistant
                Section Team Leader
                </p>
                <p>
                I've made teaching materials, led small classes, 
                created feedback forms, and collaborated with wonderful staff 
                to create an encouraging learning environment.
                </p>
                <p>
                I love seeing the many possible approaches
                to create a working solution. Designing data structures
                and algorithms is the best mix between
                mechanics and creativity.
                </p>
            </div>
        )
    }
}

export default Experience