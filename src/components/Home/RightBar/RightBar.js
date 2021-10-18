import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import WhatHappening from "./WhatHappening/WhatHappening";
import "./RightBar.css";
function RightBar() {
  return (
    <div className="r-bar">
      <SearchBar />
      <WhatHappening />
    </div>
  );
}

export default RightBar;
