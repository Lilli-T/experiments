// elements for about page
// words are an element
// image is an component (glitched or not glitched)
// overall a component of image and words

import React from 'react';
import './about.css';
import pfp from './../assets/outlined/pfp.png';

class About extends React.Component {    
    render() {
        return (
            <div id="about" className="parent">
                <h1>
                    Lilli Toone
                </h1>
                <table>
                    <tr>
                        <td className="text">
                            <h2>
                                About Me
                            </h2>
                            <div className="p">
                                <p>
                                    Welcome! It's a pleasure to meet you.            
                                </p>
                                <p>
                                    I'm Lilli, a computer science major at the 
                                    University of Washington, Seattle. I'm minoring in informatics, 
                                    and I'll graduate in 2025. I'm interested in full stack web development, 
                                    data analysis, and data visualization.
                                </p>
                                <p>
                                    I'm currently looking for an internship in these fields. 
                                    Follow the links below to contact me.
                                </p>
                            </div>
                        </td>
                        <td>
                            <img src={pfp} alt="Pfp" />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default About