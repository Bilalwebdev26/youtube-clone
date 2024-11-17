import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <Sidebar />
        {/* Video Render Here */}
        <Feed/>
      </div>
    </div>
  );
};

export default App;
