import React from "react";

function Heading({ first, second }) {
  return (
    <div>
      <h1 className="poppins text-[115px] font-extrabold tracking-wide leading-none">
        {first}
      </h1>
      <h1 className="poppins text-[115px] text-[#353334] font-extrabold tracking-wide leading-none">
        {second}
      </h1>
    </div>
  );
}

export default Heading;
