import React from "react";
import Heading from "./Heading";
import ReactIcon from "../assets/react3.png";
import JavaScript from "../assets/js.png";
import Tailwind from "../assets/taiwind.png";
import Framer from "../assets/framer.png";
import Webflow from "../assets/webflow.png";
import { CgWebsite } from "react-icons/cg";
import { GiZigzagCage } from "react-icons/gi";
import { FaCircleArrowRight } from "react-icons/fa6";
import { GiMeditation } from "react-icons/gi";
import { GiAirZigzag } from "react-icons/gi";

function About() {
  return (
    <div>
      <Heading first="SOFTWARE" second="ENGINEER" />
      <p className="text-zinc-500 leading-tight mt-[2vw] text-[20px] poppins w-[500px]">
        Front-end developer specializing in JavaScript, React.js, and CSS,
        building responsive, user-friendly websites with seamless experiences.
      </p>
      <div className="relative mt-[3vw] gap-[3vw] mb-[180px]">
        <a target="_blank" href="https://react.dev/">
          <img
            className="icons absolute left-[-35px] top-[-5px] w-[150px]"
            src={ReactIcon}
            alt="react.js"
          />
        </a>
        <a target="_blank" href="https://www.javascript.com/">
          <img
            className="icons absolute left-[115px] top-1 w-[80px]"
            src={JavaScript}
            alt="JavaScript"
          />
        </a>

        <a target="_blank" href="https://tailwindcss.com/">
          <img
            className="icons absolute left-[235px] top-1 w-[80px]"
            src={Tailwind}
            alt="Tailwind"
          />
        </a>
        <a target="_blank" href="https://www.webflow.com/">
          <img
            className="icons absolute left-[345px] top-[-5px] w-[90px]"
            src={Webflow}
            alt="Webflow"
          />
        </a>
        <a target="_blank" href="https://www.framer.com/">
          <img
            className="icons absolute left-[465px] top-1 w-[80px]"
            src={Framer}
            alt="Framer"
          />
        </a>
      </div>
      <div className="mb-[3vw] flex gap-[2vw]">
        <a href="#testimonials">
          <div className="card1 max-w-[280px] relative h-[220px] p-[2vw] rounded-[1vw] bg-gradient-to-r from-[#921015] to-[#D62828]">
            <GiMeditation className="z-[1] relative" size={40} />
            <h1 className="z-[1] relative poppins text-[25px] mt-[20px] tracking-[3px] font-semibold uppercase">
              testimonials
            </h1>
            <div className="text-[#d42727a1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <GiAirZigzag size={200} />
            </div>
            <div className="linkArrow1 absolute bottom-10 right-10">
              <FaCircleArrowRight />
            </div>
          </div>
        </a>
        <a href="">
          <div className="card2 max-w-[350px] relative p-[2vw] h-[220px] rounded-[1vw] bg-gradient-to-r from-[#003049] to-[#035480]">
            <CgWebsite className="z-[1] relative" size={40} />
            <h1 className="z-[1] relative poppins text-[25px] mt-[20px] tracking-[5px] font-semibold uppercase">
              View Projects
            </h1>
            <div className="linkArrow absolute bottom-10 right-10">
              <FaCircleArrowRight />
            </div>
            <div className="text-[#2984b455] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <GiZigzagCage size={180} />
            </div>
          </div>
        </a>
      </div>
      <div id="projects">
        <Heading first="RECENT" second="PROJECTS" />
      </div>
    </div>
  );
}

export default About;
