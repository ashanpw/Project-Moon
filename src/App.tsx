import "./App.css";
import { AboutGrid } from "./components/AboutGrid/AboutGrid";
import { Carousel } from "./components/Carousel/Carousel";
import { Dots } from "./components/NavigationDots/NavigationDots";

import { Experience } from "./components/Experience/Experience";
import { Tech } from "./components/Tech/Tech";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <AboutGrid />
      <Tech />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
