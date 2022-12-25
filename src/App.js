import './App.css';
import { SafeAreaView } from 'react-native';
import pfp from './assets/outlined/pfp.png'
import logo from './assets/outlined/digi-logo.png'
import seamcarved from './assets/outlined/parfaits.png'
import mazes from './assets/outlined/mazes.png'
import shiny from './assets/outlined/shiny-group.png'
import a4 from './assets/outlined/a4.png'
import envelope from './assets/icons/envelope.png'
import linkedin from './assets/icons/linkedin.png'
import github from './assets/icons/github.png'
import resume from './assets/icons/resume.png'
import CSSlogo from './assets/logos/CSSlogo.png'
import HTML5logo from './assets/logos/HTML5logo.png'
import Javalogo from './assets/logos/Javalogo.png'
import Rlogo from './assets/logos/Rlogo.png'
import Reactlogo from './assets/logos/Reactlogo.png'

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <div className="App">
      <div className="menu-bar">
        <p>
          About Me
          Links
          Experience
          Projects
        </p>
      </div>
      <div className="about">
        <div>
          <h1>
            Lilli Toone
          </h1>
          <h2>
            About Me
          </h2>
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
        <div>
          <img src={pfp} alt="Pfp" />
        </div>
      </div>
      <div className="headers">
        <h2>
          Links
        </h2>
        <div className="headers">
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
      <div className="headers">
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
      <div className="headers">
        <h2>
          Projects
        </h2>
        <h3>
          Languages
        </h3>
        <table>
          <tr>
            <td><img src={Javalogo} alt="Javalogo" /></td>
            <td><img src={Rlogo} alt="Rlogo" /></td>
            <td><img src={Reactlogo} alt="Reactlogo" /></td>
            <td><img src={HTML5logo} alt="HTML5logo" /></td>
            <td><img src={CSSlogo} alt="CSSlogo" /></td>
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
            <td className="about">
              <img src={logo} alt="Logo" />
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
            <td className="about">
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
              <img src={seamcarved} alt="SaamCarved" />
            </td>
          </tr>
          <tr>
            <td className="about">
              <img src={mazes} alt="Mazes" />
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
            <td className="about">
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
              <img src={shiny} alt="ShinyGroup" />
            </td>
          </tr>
          <tr>
            <td className="about">
              <img src={a4} alt="A4" />
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
    </div>
    </SafeAreaView>
  );
}

export default App;
