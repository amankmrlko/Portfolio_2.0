import React from "react";
import Navbar from "./components/Navbar";
import InfoCard from "./components/InfoCard";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      id="home"
      className="relative w-full min-h-screen bg-[#151312] text-white"
    >
      <Navbar />
      <Resume />
      <div className=" flex pt-[20vh] min-h-[200vh]">
        <InfoCard />
        <div className="ml-[5vw] max-w-[750px] min-h-[200vh]">
          <About />
          <Project />
          <Experience />
          <Skills />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
