import React from "react";
import LinkCards from "./LinkCards";
import Sundown from "../assets/sundown.png";
import Ochi from "../assets/ochi.png";

function Project() {
  return (
    <>
      <LinkCards
        link="https://amankmrz-sundownclone.netlify.app/"
        heading="SunDown-Clone"
        disc="Cloned a sophisticated website, showcasing advanced skills with HTML, CSS, JavaScript, Swiper, GSAP, and Locomotive Scroll for dynamic interactions."
        image={Sundown}
      />
      <LinkCards
        link="https://amankmrlko.github.io/ochi-clone/"
        heading="Ochi-Clone"
        disc="Developed a website inspired by ochi.design using Tailwind CSS, React.js, Framer Motion, GSAP, and Locomotive Scroll for smooth animations and dynamic interfaces."
        image={Ochi}
      />
    </>
  );
}

export default Project;
