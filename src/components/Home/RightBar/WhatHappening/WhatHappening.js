import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import NewsTab from "./NewsTab";
import "./WhatHappening.css";
function WhatHappening() {
  const history = useHistory();
  return (
    <div className="what-happening">
      <h3>What's Happening</h3>
      <NewsTab
        vTag="The reviews are here for Vickey Kausal's Sardar Udham"
        imgSrc="https://pbs.twimg.com/semantic_core_img/1449696959120351232/AUtAoeCm?format=png&name=120x120"
      />
      <NewsTab
        hashtag="HereForRealAchievers"
        text="We celebrate real achievers!"
      />
      <NewsTab trending="Trending in India" vTag="Zerodha" />
      <NewsTab trending="Trending in India" vTag="Rs. 4.59" />
      <NewsTab
        trending="Trending . Technology"
        vTag="#AppleEvent"
        nTweets="10k tweets"
      />
      <NewsTab trending="Trending . Music" vTag="SUGA" nTweets="15k tweets" />
      <Button
        className="show-more"
        onClick={() => {
          history.push("/explore");
        }}
      >
        Show More
      </Button>
    </div>
  );
}

export default WhatHappening;
