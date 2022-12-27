// elements for links page
// headers are elements
// words are an element
// icons are components
// links are components

import React from 'react';
import './projects.css';
import logo from './../assets/outlined/digi-logo.png';
import seamcarved from './../assets/outlined/parfaits.png';
import mazes from './../assets/outlined/mazes.png';
import shiny from './../assets/outlined/shiny-group.png';
import a4 from './../assets/outlined/a4.png';
import CSSlogo from './../assets/logos/CSSlogo.png';
import HTML5logo from './../assets/logos/HTML5logo.png';
import Javalogo from './../assets/logos/Javalogo.png';
import Rlogo from './../assets/logos/Rlogo.png';
import Reactlogo from './../assets/logos/Reactlogo.png';

class Projects extends React.Component {
    render() {
        return (
            <div id = 'projects' className="headers">
                <h2>
                    Projects
                </h2>
                <h3>
                    Languages
                </h3>
                <table className="table">
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
                <h3>
                    Projects
                </h3>
                <table>
                    <tr>
                        <td className="single">
                            <img src={logo} alt="Logo" className="preview" />
                            <div>
                                <h4>
                                    Portfolio - Web Development
                                </h4>
                                <p>
                                    Making this site has been an adventure! This was my first time
                                    using React, and I had a lot of fun learning about mixing JS, HTML,
                                    and CSS elements in a project. I also learned about web deployment
                                    and hosting services.
                                    See my learning/development process below.
                                </p>
                                <p>
                                    learning process
                                    repo link
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="single">
                            <div>
                                <h4>
                                    Seam Carving - Image Program
                                </h4>
                                <p>
                                    I've both completed and taught this Data Structures and Algorithms
                                    project in Java. This project takes in an image and smaller dimensions,
                                    repeatedly finds horizontal and vertical pixel seams to take out,
                                    and writes that image to a file. This algorithm creates a graph and
                                    finds shortest paths using Dijkstra's algorithm and a priority queue,
                                    which I also implemented with a heap. There is no repo link as it is
                                    against UW CSE policy to post class code.
                                </p>
                                <p>
                                    spec link
                                </p>
                            </div>
                            <img src={seamcarved} alt="SaamCarved" className="preview" />
                        </td>
                    </tr>
                    <tr>
                        <td className="single">
                            <img src={mazes} alt="Mazes" className="preview" />
                            <div>
                                <h4>
                                    Mazes - Graph GUI
                                </h4>
                                <p>
                                    This Java program generates a maze using disjoint sets to execute
                                    Kruskal's algorithm, and it also solves the same maze using
                                    Dijkstra's algorithm. Users can also navigate the maze themselves.
                                    I found the flexibility and ubiquity of graphs fascinating.
                                    There is no repo link as it is against UW CSE policy to post class code.
                                </p>
                                <p>
                                    spec link
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="single">
                            <div>
                                <h4>
                                    Integrating Wildfire Protection - Data Analysis
                                </h4>
                                <p>
                                    Completed for a data science class, I worked with two other classmates
                                    to create this interactive page. We were curious about how the built
                                    environment affects human responses to wildfire smoke. Our final
                                    site is published using Shiny, and we also published a version
                                    using GitHub pages. We used R and markdown, and I enjoyed experimenting
                                    with different visualization types and interactive charts.
                                </p>
                                <p>
                                    site link gh pages
                                    site link shiny
                                    repo link
                                </p>
                            </div>
                            <img src={shiny} alt="ShinyGroup" className="preview" />
                        </td>
                    </tr>
                    <tr>
                        <td className="single">
                            <img src={a4} alt="A4" className="preview" />
                            <div>
                                <h4>
                                    Incarceration Trends - Data Analysis
                                </h4>
                                <p>
                                    You can see my own work from a data science class in this project.
                                    This site is on GitHub pages, and I used R and markdown. I spent
                                    a lot of time learning different data wrangling techniques to find
                                    data trends. I spent additional time making the graph visually appealing.
                                </p>
                                <p>
                                    site link gh pages
                                    repo link
                                </p>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Projects