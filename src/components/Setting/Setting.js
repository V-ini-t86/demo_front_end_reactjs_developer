import React from "react";
import RightBar from "../Home/RightBar/RightBar";
import Sidebar from "../Home/Sidebar/Sidebar";
import SettingCenter from "./SettingCenter/SettingCenter";
import SettingRight from "./SettingRight/SettingRight";
import "./Setting.css";
function Setting() {
  return (
    <div className="setting">
      <Sidebar />
      <SettingCenter />
      <SettingRight />
    </div>
  );
}

export default Setting;
