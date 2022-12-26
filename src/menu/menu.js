// elements for top menu; click to scroll
// header is an element
// words are an element
// icons are an element

import React from 'react';
import './menu.css';
import { Link } from 'react-scroll'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.scroll = React.createRef();
    }
    
    render() {
        return (
            <div className="menu-bar">
                <ul className="list">
                    <li className="list-item"><Link activeClass="active" to="about" spy={true} smooth={true}>About</Link></li>
                    <li className="list-item"><Link to="links" spy={true} smooth={true}>Links</Link></li>
                    <li className="list-item"><Link to="experience" spy={true} smooth={true}>GitHub</Link></li>
                    <li className="list-item"><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
                </ul>
            </div>            
        )
    }
}

export default Menu