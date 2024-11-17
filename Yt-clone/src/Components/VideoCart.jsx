import React from "react";
import thumbnail from "../assets/thumbnail.jpg";
import Avatar from "react-avatar";

const VideoCart = () => {
  return (
    <div className="w-80 cursor-pointer lg:w-60 md:w-50 sm:w-35">
      <img className="w-full rounded-xl mb-3" src={thumbnail} alt="" />
      <div className="bilal">
        <div className="flex mt-2">
          <Avatar
            githubHandle="sitebase"
            size={34}
            round={true}
            className="cursor-pointer"
          />
          <div className="ml-3">
          <h1 className="font-bold ">Master React with Bilal</h1>
          <p className="text-gray-600">Bilal Dev</p>
        </div>
       
        </div>
        
        <div className="flex ">
            <h3 className="font-medium">Views</h3>-
            <p>Likes</p>-
            <p>Comments</p>
        </div>
        <div className="">
            <h2>Posted : </h2>
        </div>

      </div>
    </div>
  );
};

export default VideoCart;
