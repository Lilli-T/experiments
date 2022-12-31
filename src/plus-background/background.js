import React from 'react';
import './background.css';
import About from './../content/about/about.js';
import Links from './../content/links/links.js';
import Experience from './../content/experience/experience.js';
import Projects from './../content/projects/projects.js';
import Menu from './../content/menu/menu.js';

function Background() {
    return (
        <div className="all">
            <div className="content">
                <Menu />
                <About />
                <Links />
            </div>
            <div>
                <div className="line-0be7fb first-1"></div>
                <div className="line-ffdd7e first-2"></div>
                <div className="line-ff009d first-3 flicker-first"></div>
            </div>
            <div className="content">
                <Experience />
            </div>
            <div>
                <div className="line-ff009d second-1"></div>
                <div className="line-ffdd7e second-2 flicker-second"></div>
                <div className="line-0be7fb second-3"></div>
            </div>
            <div>
                <div className="line-ffdd7e third-1"></div>
                <div className="line-0be7fb third-2"></div>
                <div className="line-ff009d third-3 flicker-first"></div>
            </div>
            <div className="content">
                <Projects />
            </div>
            <div>
                <div className="line-ff009d fourth-1"></div>
                <div className="line-0be7fb fourth-2"></div>
                <div className="line-ffdd7e fourth-3 flicker-second"></div>
            </div>
        </div>
    );
}

export default Background;