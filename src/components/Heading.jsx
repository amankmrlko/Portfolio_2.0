import React from "react";

function Heading({ first, second }) {
  return (
    <div>
      <h1 className="poppins text-[6.5vw] font-extrabold tracking-wide leading-none">
        {first}
      </h1>
      <h1 className="poppins text-[6.2vw] text-[#353334] font-extrabold tracking-wide leading-none">
        {second}
      </h1>
    </div>
  );
}

export default Heading;
