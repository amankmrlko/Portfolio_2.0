import React from "react";
import { MdArrowOutward } from "react-icons/md";

function LinkCards({ link, heading, disc, image }) {
  return (
    <>
      <a target="_blank" href={link}>
        <div className="relative mt-[3vw]">
          <div className="p-[1.5vw] flex relative w-[650px] h-[200px] linkcard rounded-[1vw]">
            <img
              className="h-[100%] rounded-[0.5vw] object-fill mr-[1.5vw]"
              src={image}
            />
            <div>
              <h1 className="mb-4 poppins text-[30px] font-bold">{heading}</h1>
              <p className="max-w-[80%] text-zinc-500 leading-tight tracking-tight poppins">
                {disc}
              </p>
            </div>
            <div className="text-[#D62828] arrow absolute top-3 right-3">
              <MdArrowOutward size={30} />
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default LinkCards;
