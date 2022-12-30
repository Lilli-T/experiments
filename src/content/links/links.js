// elements for links page
// header is an element
// words are an element
// icons are an element

import React from 'react';
import './links.css';
import envelope from './../../assets/icons/envelope.png';
import linkedin from './../../assets/icons/linkedin.png';
import github from './../../assets/icons/github.png';
import resume from './../../assets/icons/resume.png';

class Links extends React.Component {
    render() {
        return (
            <div id="links" className="link-big">
                <h2>
                    Links
                </h2>
                <div className="text">
                    <table>
                        <tr>
                            <td><img src={envelope} alt="Envelope" className="icons" /></td>
                            <td>Mail: <a href="mailto:lillitoone@gmail.com" className="link">lillitoone@gmail.com</a></td>
                        </tr>
                        <tr>
                            <td><img src={linkedin} alt="LinkedIn" className="icons" /></td>
                            <td>LinkedIn: <a href="https://www.linkedin.com/in/lilli-t/" className="link">lilli-t</a></td>
                        </tr>
                        <tr>
                            <td><img src={github} alt="GitHub" className="icons" /></td>
                            <td>GitHub: <a href="https://github.com/Lilli-T" className="link">Lilli-T</a></td>
                        </tr>
                        <tr>
                            <td><img src={resume} alt="Resume" className="icons" /></td>
                            <td><a href="https://drive.google.com/file/d/1Czkdap8Y-K82Wdu_s2vFxr6yD9Ca8Hc1/view?usp=sharing" className="link">Resume</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Links