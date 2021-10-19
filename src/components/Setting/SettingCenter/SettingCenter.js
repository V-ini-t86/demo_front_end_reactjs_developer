import React from "react";
import SettingPTab from "../SettingPTab/SettingPTab";
import "./SettingCenter.css";
function SettingCenter() {
  return (
    <div className="setting-center">
      <h2>Settings</h2>
      <SettingPTab name="Your Account" />
      <SettingPTab name="Security And Account Access" />
      <SettingPTab name="Privacy and safety" />
      <SettingPTab name="Notifications" />
      <SettingPTab name="Accessiblity,display & language" />
      <SettingPTab name="Additional Resources" />
    </div>
  );
}

export default SettingCenter;
