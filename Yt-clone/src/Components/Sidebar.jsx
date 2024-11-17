import React from "react";
import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";

const SideBarItems = [
  { title: "Home", icon: <IoHome /> },
  { title: "Shorts", icon: <SiYoutubeshorts /> },
  { title: "Subscription", icon: <MdSubscriptions /> },
  { title: "Home", icon: <IoHome /> },
  { title: "Shorts", icon: <SiYoutubeshorts /> },
  { title: "Subscription", icon: <MdSubscriptions /> },
  { title: "Home", icon: <IoHome /> },
  { title: "Shorts", icon: <SiYoutubeshorts /> },
  { title: "Subscription", icon: <MdSubscriptions /> },
  { title: "Home", icon: <IoHome /> },
  { title: "Shorts", icon: <SiYoutubeshorts /> },
  { title: "Subscription", icon: <MdSubscriptions /> },
  { title: "Home", icon: <IoHome /> },
  { title: "Shorts", icon: <SiYoutubeshorts /> },
  { title: "Subscription", icon: <MdSubscriptions /> },
  { title: "Home", icon: <IoHome /> },
  { title: "Shorts", icon: <SiYoutubeshorts /> },
  { title: "Subscription", icon: <MdSubscriptions /> },
  { title: "Home", icon: <IoHome /> },
  { title: "Shorts", icon: <SiYoutubeshorts /> },
  { title: "Subscription", icon: <MdSubscriptions /> },
  { title: "Home", icon: <IoHome /> },
  { title: "Shorts", icon: <SiYoutubeshorts /> },
  { title: "Subscription", icon: <MdSubscriptions /> },
  { title: "Home", icon: <IoHome /> },
  { title: "Shorts", icon: <SiYoutubeshorts /> },
  { title: "Subscription", icon: <MdSubscriptions /> },
];

const Sidebar = () => {
  const open = useSelector((store)=>store.app.open)
  return (
    <div className="sticky mt-0 mr-50 w-[300px] top-[70px] scrollbar scrollbar-thumb-gray-300 overflow-y-scroll overflow-x-hidden  h-[calc(100vh-65px)]">
      {SideBarItems.map((label, index) => (
        <div
          key={index}
          className=" rounded-lg  w-[90%] flex items-center justify-betweem mx-2 py-2 my-2 cursor-pointer hover:bg-gray-300 transition-all ml-5 "
        >
          {/* <IoHome size="24px" className="mr-10" /> */}
          <span className="text-[18px] mr-2 ">{label.icon}</span>
          <p className={`font-bold ${open ? "" : "hidden"} `}>{label.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
