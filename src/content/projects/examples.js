import React from 'react';
import './examples.css';
import logo from './../../assets/previews/logo.png';
import seamcarved from './../../assets/previews/parfaits.png';
import mazes from './../../assets/previews/mazes-b.png';
import shiny from './../../assets/previews/shiny-group.png';
import a4 from './../../assets/previews/a4.png';

class Examples extends React.Component {
    render() {
        return (
            <div>
                <h3 className="header">
                    Projects
                </h3>
                <div className="row">
                    <img src={logo} alt="Logo" className="glow-ring-dfe0fa" />
                    <div className="text-right">
                        <h4 className="project-title">
                            Portfolio - Web Development
                        </h4>
                        <p className="p">
                            Making this site has been an adventure! This was my first time
                            using <span className="highlight-ff009d">React</span>, and I had a lot of fun 
                            learning about mixing <span className="highlight-ff009d">JS</span>
                            , <span className="highlight-ff009d">HTML</span>,
                            and <span className="highlight-ff009d">CSS</span> elements in a project. 
                            I also learned about web <span className="highlight-ff009d">deployment</span> and 
                            hosting services. See my learning/development process below.
                        </p>
                        <p className="links">
                            <a href="https://docs.google.com/document/d/1b10Fz0yrusQcINQ61mqH35xEnzFQsex7sp2VhujvOBw/edit?usp=sharing" className="link-text">Learning Process</a><br />
                            <a href="https://github.com/Lilli-T/lilli-t.github.io" className="link-text">GitHub Repository</a>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="text-left">
                        <h4 className="project-title">
                            Seam Carving - Image Program
                        </h4>
                        <p className="p">
                            I've both completed and <span className="highlight-ffdd7e">taught</span> this Data Structures and Algorithms
                            project in <span className="highlight-ffdd7e">Java</span>. This project takes in an image and smaller dimensions,
                            repeatedly finds <span className="highlight-ffdd7e">horizontal and vertical pixel seams to take out</span>,
                            and writes that image to a file. This algorithm creates a graph and
                            finds shortest paths using <span className="highlight-ffdd7e">Dijkstra's algorithm</span> and a priority queue,
                            which I also implemented with a heap. There is no repo link as it is
                            against UW CSE policy to post class code.
                        </p>
                        <p className="links">
                            <a href="https://courses.cs.washington.edu/courses/cse373/22su/projects/seamcarving/" className="link-text">Specification</a>
                        </p>
                    </div>
                    <img src={seamcarved} alt="SaamCarved" className="glow-ring-0be7fb" />
                </div>
                <div className="row">
                    <img src={mazes} alt="Mazes" className="glow-ring-ff009d" />
                    <div className="text-right">
                        <h4 className="project-title">
                            Mazes - Graph GUI
                        </h4>
                        <p className="p">
                            This Java program <span className="highlight-0be7fb">generates a maze</span> using disjoint sets to
                            execute <span className="highlight-0be7fb">Kruskal's algorithm</span>, and it also <span className="highlight-0be7fb">solves the same maze</span> using
                            Dijkstra's algorithm. Users can also navigate the maze themselves.
                            I found the flexibility and ubiquity of graphs fascinating.
                            There is no repo link as it is against UW CSE policy to post class code.
                        </p>
                        <p className="links">
                            <a href="https://courses.cs.washington.edu/courses/cse373/22sp/projects/mazes/" className="link-text">Specification</a>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="text-left">
                        <h4 className="project-title">
                            Integrating Wildfire Protection - Data Analysis
                        </h4>
                        <p className="p">
                            Completed for a data science class, I worked with two other classmates
                            to create this <span className="highlight-ff009d">interactive page</span>. We were curious about how the built
                            environment affects human responses to wildfire smoke. Our final
                            site is published using <span className="highlight-ff009d">Shiny</span>, and we also published a version
                            using <span className="highlight-ff009d">GitHub pages</span>. We used <span className="highlight-ff009d">R</span> and <span className="highlight-ff009d">markdown</span>, and I enjoyed experimenting
                            with different <span className="highlight-ff009d">visualization types</span> and interactive charts.
                        </p>
                        <p className="links">
                            <a href="https://info201b-au2022.github.io/project-Lilli-T/" className="link-text">Site - GitHub Pages</a><br />
                            <a href="https://lilli-t.shinyapps.io/shiny_report/?_ga=2.217516502.1784305604.1672186366-246843069.1668727360" className="link-text">Site - Shiny</a><br />
                            <a href="https://github.com/info201b-au2022/project-Lilli-T" className="link-text">GitHub Repository</a>
                        </p>
                    </div>
                    <img src={shiny} alt="ShinyGroup" className="glow-ring-ffdd7e" />
                </div>
                <div className="row">
                    <img src={a4} alt="A4" className="glow-ring-0be7fb" />
                    <div className="text-right">
                        <h4 className="project-title">
                            Incarceration Trends - Data Analysis
                        </h4>
                        <p className="p">
                            You can see my own work from a data science class in this project.
                            This site is on <span className="highlight-ffdd7e">GitHub pages</span>, and I used <span className="highlight-ffdd7e">R</span> and <span className="highlight-ffdd7e">markdown</span>. I spent
                            a lot of time learning different <span className="highlight-ffdd7e">data wrangling</span> techniques to
                            find <span className="highlight-ffdd7e">data trends</span>. I spent additional time making the graph visually appealing.
                        </p>
                        <p className="links">
                            <a href="https://info201b-au2022.github.io/a4-Lilli-T/" className="link-text">Site - GitHub Pages</a><br />
                            <a href="https://github.com/info201b-au2022/a4-Lilli-T" className="link-text">GitHub Repository</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Examples