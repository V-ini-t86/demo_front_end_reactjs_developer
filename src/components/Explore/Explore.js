import React from "react";
import Sidebar from "../Home/Sidebar/Sidebar";
import "./Explore.css";
import ExploreContent from "./ExploreContent/ExploreContent";
import { styled } from "@mui/system";
import ExploreRight from "./ExploreRight/ExploreRight";

const Div = styled("div")`
  display: flex;
`;

function Explore() {
  window.scroll(0, 0);
  return (
    <Div>
      <Sidebar />
      <ExploreContent />
      <ExploreRight />
    </Div>
  );
}

export default Explore;
