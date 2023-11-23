import "./App.css";

import { Carousel } from "./components/Projects/components/Carousel/Carousel";
import { Dots } from "./components/Projects/components/NavigationDots/NavigationDots";

import { Experience } from "./components/Experience/Experience";
import { Tech } from "./components/Tech/Tech";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Stats } from "./components/Stats/Stats";

function App() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Tech />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
