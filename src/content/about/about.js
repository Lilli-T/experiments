// elements for about page
// words are an element
// image is an component (glitched or not glitched)
// overall a component of image and words

import React from 'react';
import './about.css';
import pfp from './../../assets/previews/self-round.png';

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
                                    Welcome! It's a pleasure to meet you.  <br />  <br />
                                    I'm Lilli, a <span class="highlight-ff009d">computer science major</span> at the
                                    University of Washington, <span class="highlight-ff009d">Seattle</span>. I'm minoring in informatics, 
                                    and I'll graduate in <span class="highlight-ff009d">2025</span>. 
                                    I'm interested in <span class="highlight-ff009d">full stack web development</span>
                                    , data analysis, and data visualization.
                                </p>
                            </div>
                        </td>
                        <td>
                            <img src={pfp} alt="Pfp" className="glow-ring glow-effect" />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default About