import React from "react";
import { styled } from "@mui/system";
import SettingPTab from "../SettingPTab/SettingPTab";
import YourAccount from "../YourAccount/YourAccount";

const Div = styled("div")`
  position: fixed;
  right: 0;
  margin: 10px 20px 20px 20px;
  width: 43.5%;
  padding: 0px;
`;
function SettingRight() {
  return (
    <Div>
      <YourAccount />
    </Div>
  );
}

export default SettingRight;
