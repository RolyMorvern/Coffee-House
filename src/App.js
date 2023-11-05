import { useEffect } from "react";
import './App.css';
import Navbar from "./components/NavbarHome/NavbarHome";
import Hero from "./components/HomeHero/HomeHero";
import About from "./components/HomeAbout/HomeAbout";
import Contact from "./components/HomeContact/HomeContact";
function App() {
  useEffect(() => {
    document.title = "Coffee House | Home"
  }, []);
  return (
    <>
      <Navbar />
      <div className="container hero-bg">
        <Hero />
      </div>
      <div className="about-bg">
        <About />
      </div>
      <div className="contact-bg">
        <Contact />
      </div>
    </>
  );
}

export default App;