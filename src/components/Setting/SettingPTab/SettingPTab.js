import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/system";
import "./settingTab.css";

const Div = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid lightgrey;
`;

function SettingPTab({ name, info }) {
  return (
    <Div className="s-tab">
      <div style={{ marginLeft: "20px" }}>
        <h4 style={{ fontWeight: info ? 600 : 400 }}>{name}</h4>
        {info && <p style={{ fontSize: "0.8rem" }}>{info}</p>}
      </div>
      <ArrowForwardIosIcon fontSize="small" />
    </Div>
  );
}

export default SettingPTab;
