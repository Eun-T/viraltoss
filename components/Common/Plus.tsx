import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";


const Plus = () => {
  return (
    <div className="absolute w-full h-full group hover:bg-black hover:bg-opacity-50 hover:opacity-100 z-20 duration-500 flex justify-center items-center">
      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <AiOutlinePlusCircle size="150" />
      </div>
    </div>
  );
};

export default Plus;
