import React from "react";
import { IoHome } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className=" w-50 ml-4  ">

      <div className="border border-gray-400  rounded-lg  w-[100%] flex justify-betweem mx-2 py-2">
        <IoHome size="24px" className="mr-10" />
        <p className="font-bold">Home</p>
      </div>

      <div className="border border-gray-400  rounded-lg  w-[100%] flex justify-betweem m-2 py-2">
        <IoHome size="24px" className="mr-10" />
        <p className="font-bold">Shorts</p>
      </div>

      <div className="border border-gray-400  rounded-lg  w-[100%] flex justify-betweem m-2 py-2">
        <IoHome size="24px" className="mr-10" />
        <p className="font-bold">Subscription</p>
      </div>

      
      
    </div>
  );
};

export default Sidebar;
