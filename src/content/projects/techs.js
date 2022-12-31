import React from 'react';
import './techs.css';
import CSSlogo from './../../assets/logos/CSSlogo.png';
import HTML5logo from './../../assets/logos/HTML5logo.png';
import Javalogo from './../../assets/logos/Javalogo.png';
import Rlogo from './../../assets/logos/Rlogo.png';
import Reactlogo from './../../assets/logos/Reactlogo.png';


class Techs extends React.Component {
    render() {
        return (
            <div className="proj-font">
                <h3>
                    Languages
                </h3>
                <table className="logo-table">
                    <tr>
                        <td><img src={Javalogo} alt="Javalogo" className="logo" /></td>
                        <td><img src={Rlogo} alt="Rlogo" className="logo" /></td>
                        <td><img src={Reactlogo} alt="Reactlogo" className="logo" /></td>
                        <td><img src={HTML5logo} alt="HTML5logo" className="logo" /></td>
                        <td><img src={CSSlogo} alt="CSSlogo" className="logo" /></td>
                    </tr>
                    <tr>
                        <td>Java</td>
                        <td>R</td>
                        <td>React, React Native</td>
                        <td>HTML5</td>
                        <td>CSS</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Techs