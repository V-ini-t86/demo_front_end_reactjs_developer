import React from "react";
import Navbar from "../Navbar/Navbar";
import TweetForm from "../TweetForm/TweetForm";
import Card from "./Cards/Card";
import "./Center.css";
import data from "../../../tweet-data.json";
function Center() {
  return (
    <div className="center">
      <Navbar />
      <TweetForm />
      <hr />
      {data.map((val, i) => {
        return i < 50 && <Card key={val.id} data={val} />;
      })}
    </div>
  );
}

export default Center;
