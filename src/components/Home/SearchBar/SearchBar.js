import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "./SearchBar.css";
function SearchBar() {
  return (
    <div className="search-box">
      <SearchIcon />
      <input className="search" type="text" placeholder="Search" />
    </div>
  );
}

export default SearchBar;
