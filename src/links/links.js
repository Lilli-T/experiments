// elements for links page
// header is an element
// words are an element
// icons are an element

import React from 'react';
import './links.css';
import envelope from './../assets/icons/envelope.png';
import linkedin from './../assets/icons/linkedin.png';
import github from './../assets/icons/github.png';
import resume from './../assets/icons/resume.png';

class Links extends React.Component {
    render() {
        return (
            <div id="links" className="text">
                <h2>
                Links
                </h2>
                <div className="text">
                    <table>
                        <tr>
                            <td><img src={envelope} alt="Envelope" /></td>
                            <td>lillitoone@gmail.com</td>
                        </tr>
                        <tr>
                            <td><img src={linkedin} alt="LinkedIn" /></td>
                            <td>lilli-t</td>
                        </tr>
                        <tr>
                            <td><img src={github} alt="GitHub" /></td>
                            <td>Lilli-T</td>
                        </tr>
                        <tr>
                            <td><img src={resume} alt="Resume" /></td>
                            <td>Resume</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Links