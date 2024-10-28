import React from "react";
import Pfp from "../assets/pfp1.jpg";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";

function InfoCard() {
  return (
    <div className="sticky ml-[10vw] poppins h-[550px] w-[22vw] overflow-hidden p-[2vw] rounded-[1vw] left-0 top-[10vh] bg-zinc-100">
      <div className="relative h-[100%] w-[100%]">
        <div className="flex justify-center">
          <img
            className=" object-cover rounded-[1vw] w-[90%]"
            src={Pfp}
            alt="profile pic"
          />
        </div>
        <h1 className="text-center tracking-tighter mt-[1.5vw] leading-none text-[2vw] heading text-zinc-900">
          Aman Kumar
        </h1>
        <p className="text-center poppins text-zinc-700 leading-tight mt-[1.5vw]">
          Passionate web developer, expertly designing and building dynamic
          websites and applications that elevate user experiences and drive
          project success.
        </p>
        <div className="text-[#D62828] absolute flex left-[50%] bottom-[0] translate-x-[-50%] mt-[1vw] gap-[2vw]">
          <a target="_blank" href="https://github.com/amankmrlko">
            <FaGithub size={25} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/amankumarlko/">
            <BsLinkedin size={25} />
          </a>
          <a target="_blank" href="mailto:amankumar.lko@yahoo.com">
            <MdAttachEmail size={30} />
          </a>
          <a target="_blank" href="https://x.com/amankmrz">
            <FaSquareXTwitter size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
