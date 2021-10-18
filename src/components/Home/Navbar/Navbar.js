import { Button } from "@mui/material";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <h3>Home</h3>
      <button
        style={{
          padding: 0,
          width: "35px",
          // height: "30px",
          height: "100%",
          cursor: "pointer",
        }}
      >
        <img src="images/top-tweets.png" alt="top-tweets" />
      </button>
      {/* <SearchBar /> */}
    </nav>
  );
}

export default Navbar;
