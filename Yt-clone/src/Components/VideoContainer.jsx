import React, { useEffect } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API, API_key } from "../Constants/youtube";
import VideoCart from "./VideoCart";
const VideoContainer = () => {
  const fetchYoutubeVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      console.log(res);
    } catch (error) {
      console.log("Error :", error);
    }
  };
  useEffect(() => {
    fetchYoutubeVideo();
  }, []);
  return(
    <div   className="flex flex-wrap gap-4 p-4 justify-center">
    <VideoCart />
    <VideoCart />
    <VideoCart />
    <VideoCart />
    <VideoCart />
    <VideoCart />
    <VideoCart />
    <VideoCart />
    <VideoCart />
    <VideoCart />
    <VideoCart />
    <VideoCart />
  </div>
  )
 ;
};

export default VideoContainer;
