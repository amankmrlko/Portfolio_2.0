import React from "react";
import { IoCloudDownload } from "react-icons/io5";

function Resume() {
  return (
    <>
      <a
        href="https://drive.google.com/uc?export=download&id=1ySRWyO8JBrUGdrIDfJYCVUcsdzcF_Qx0"
        download={"AmanKumar_Resume.pdf"}
      >
        <div className="fixed z-[90] resume rounded-[1vw] p-2 bottom-8 right-8  bg-gradient-to-r from-[#921015] to-[#D62828]">
          <IoCloudDownload
            size={20}
            className=" absolute top-1/2 translate-y-[-40%]"
          />
          <h1 className="poppins font-semibold ml-[25px]">Resume</h1>
        </div>
      </a>
    </>
  );
}

export default Resume;
