import React from "react";
import Heading from "./Heading";
import Testimonial from "./Testimonial";
import tcsLogo from "../assets/tcs.png";

function Experience() {
  return (
    <>
      <div id="testimonials" className="uppercase mt-[5vw] mb-[3vw]">
        <Heading first="Chapters &" second="Accolades" />
      </div>
      <Testimonial />
      <div className="flex justify-center">
        <div>
          <a target="_blank" href="https://www.tcs.com/">
            <img
              className="w-[200px] tcs pt-6 pb-6 pl-8 mb-6 pr-8 rounded-xl cursor-pointer bg-[#1A1A1A]"
              src={tcsLogo}
              alt="tcs logo"
            />
          </a>
          <h1 className="ml-[-15px] uppercase poppins font-semibold text-[20px]">
            2+ years experience
          </h1>
          <div className="flex justify-center">
            <p className="poppins inline-block text-[15px] ml-[-15px] text-[#858485]">
              Full-time
            </p>
          </div>
        </div>
      </div>
      <p className="w-[95%] text-center mt-5 mb-5 text-[15px] leading-[20px] text-[#858485] poppins">
        I managed backend tasks and database programming using MySQL and
        React.js to enhance website functionality. In addition, I provided live
        site support by resolving tickets, troubleshooting bugs, and fixing
        design issues. I also developed and maintained frontend pages for
        clients, ensuring timely delivery within defined SLAs, utilizing HTML,
        CSS, and JavaScript.
      </p>
    </>
  );
}

export default Experience;
