import React from "react";
import { useSelector } from "react-redux";

const buttonLists = [
  { label: "All", href: "#" },
  { label: "Java", href: "#" },
  { label: "C++", href: "#" },
  { label: "JavaScript", href: "#" },
  { label: "Live", href: "#" },
  { label: "Coding", href: "#" },
  { label: "Mixes", href: "#" },
  { label: "Songs", href: "#" },
  { label: "vlogs", href: "#" },
  { label: "Podcasts", href: "#" },
  { label: "Web Development", href: "#" },
  { label: "C/C#", href: "#" },
  { label: "Java", href: "#" },
  { label: "C++", href: "#" },
  { label: "JavaScript", href: "#" },
  { label: "Live", href: "#" },
  { label: "Coding", href: "#" },
  { label: "Mixes", href: "#" },
  { label: "Songs", href: "#" },
  { label: "vlogs", href: "#" },
  { label: "Podcasts", href: "#" },
  { label: "Web Development", href: "#" },
  { label: "C/C#", href: "#" },
  { label: "C++ SDE", href: "#" },
  { label: "JS Libraries", href: "#" },
  { label: "News", href: "#" },
  { label: "Hackathons", href: "#" },
  { label: "Goverment", href: "#" },
  { label: "Startups", href: "#" },
  { label: "Google", href: "#" },
  { label: "Amazaon", href: "#" },
];

const ButtonList = () => {
  const open = useSelector((store)=>store.app.open)
  return (
    <div className={`flex  overflow-x-auto whitespace-nowrap scrollbar-hide bg-gray-50 px-6 py-2 ${open? 'w-[calc(100vw-70px)] ': 'w-[calc(100vw-140px)]' } p-2`}>
      {buttonLists.map((buttons, index) => (
        <a
          key={index}
          href={buttons.href}
          className="border px-3 py-1 mr-3 rounded-md font-semibold bg-gray-100 text-sm"
        >
          {buttons.label}
        </a>
      ))}
    </div>
  );
};

export default ButtonList;
