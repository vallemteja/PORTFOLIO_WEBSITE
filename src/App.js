import Navbar from "./component/NavBar/navbar";
import Intro from "./component/NavBar/intro/intro";
import Skills from "./component/NavBar/skills/skills";
import Work from "./component/Work/work";
import Contact from "./component/Contact/contact";
import Foot from "./component/Footer/Foot";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Work/>
      <Contact/>
      <Foot/>
    </div>
  );
}

export default App;
