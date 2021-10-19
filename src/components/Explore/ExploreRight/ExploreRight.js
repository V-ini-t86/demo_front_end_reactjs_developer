import { styled } from "@mui/system";
import React from "react";
import WhatHappening from "../../Home/RightBar/WhatHappening/WhatHappening";

const Div = styled("div")`
  position: fixed;
  right: 0;
  margin: 10px 20px 20px 20px;
  width: 27%;
`;

function ExploreRight() {
  return (
    <Div>
      <WhatHappening />
    </Div>
  );
}

export default ExploreRight;
