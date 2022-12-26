import './App.css';
import About from './about/about.js';
import Links from './links/links.js';
import Experience from './experience/experience.js';
import Projects from './projects/projects.js';
import Menu from './menu/menu.js';
import { SafeAreaView } from 'react-native';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <div className="App">
      <Menu />
      <About />
      <Links />
      <Experience />
      <Projects />
    </div>
    </SafeAreaView>
  );
}

export default App;
