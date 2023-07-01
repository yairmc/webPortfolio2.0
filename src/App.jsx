import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.module.css";
import { Designs } from "./pages/Designs";

function App() {
  return (
    <>
      <Welcome />
      <About />
      <Projects />
      <Designs />
      <Contact />
    </>
  );
}

export default App;
