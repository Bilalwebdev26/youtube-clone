import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <Sidebar />
        {/* Video Render Here */}
      </div>
    </div>
  );
};

export default App;
