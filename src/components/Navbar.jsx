import React, { useState } from "react";
import { LuHome } from "react-icons/lu";
import { FiFolder, FiBriefcase } from "react-icons/fi";
import { LuBrain } from "react-icons/lu";
import { FaRegMessage } from "react-icons/fa6";

function Navbar() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const iconInfo = {
    home: "Home",
    folder: "Projects",
    briefcase: "Experience",
    brain: "Skills",
    message: "Contact",
  };

  return (
    <div className="bg-[#1C1A19] rounded-2xl pt-3 pb-3 mt-8 pl-6 pr-6 flex gap-8 items-center justify-center fixed z-[999] left-[50%] translate-x-[-50%]">
      <div
        onMouseEnter={() => handleMouseEnter("home")}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <a href="#home">
          <LuHome size={18} />
        </a>
        {hoveredIcon === "home" && (
          <div className="absolute poppins top-8 left-1/2 -translate-x-1/2 bg-[#1C1A19] text-white text-sm pl-2 pr-2 pt-1 pb-1 rounded">
            {iconInfo.home}
          </div>
        )}
      </div>

      <div
        onMouseEnter={() => handleMouseEnter("folder")}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <a href="#projects">
          <FiFolder size={18} />
        </a>
        {hoveredIcon === "folder" && (
          <div className="absolute poppins top-8 left-1/2 -translate-x-1/2 bg-[#1C1A19] text-white text-sm pl-2 pr-2 pt-1 pb-1 rounded">
            {iconInfo.folder}
          </div>
        )}
      </div>

      <div
        onMouseEnter={() => handleMouseEnter("briefcase")}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <a href="#testimonial">
          <FiBriefcase size={18} />
        </a>
        {hoveredIcon === "briefcase" && (
          <div className="absolute poppins top-8 left-1/2 -translate-x-1/2 bg-[#1C1A19] text-white text-sm pl-2 pr-2 pt-1 pb-1 rounded">
            {iconInfo.briefcase}
          </div>
        )}
      </div>

      <div
        onMouseEnter={() => handleMouseEnter("brain")}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <a href="#skill">
          <LuBrain size={18} />
        </a>
        {hoveredIcon === "brain" && (
          <div className="absolute poppins top-8 left-1/2 -translate-x-1/2 bg-[#1C1A19] text-white text-sm pl-2 pr-2 pt-1 pb-1 rounded">
            {iconInfo.brain}
          </div>
        )}
      </div>

      <div
        onMouseEnter={() => handleMouseEnter("message")}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <a href="#contactme">
          <FaRegMessage size={18} />
        </a>
        {hoveredIcon === "message" && (
          <div className="absolute poppins top-8 left-1/2 -translate-x-1/2 bg-[#1C1A19] text-white text-sm pl-2 pr-2 pt-1 pb-1 rounded">
            {iconInfo.message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
