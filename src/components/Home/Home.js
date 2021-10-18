import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import classes from "./Home.module.css";
import Center from "./Center/Center";
import RightBar from "./RightBar/RightBar";

function Home() {
  return (
    <div className={classes.home}>
      <Sidebar />
      <Center />
      <RightBar />
    </div>
  );
}

export default Home;
