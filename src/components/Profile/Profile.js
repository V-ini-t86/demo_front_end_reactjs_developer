import React from "react";
import RightBar from "../Home/RightBar/RightBar";
import Sidebar from "../Home/Sidebar/Sidebar";
import "./Profile.css";
import ProfileContent from "./ProfileContent";
function Profile() {
  return (
    <div className="profile">
      <Sidebar />
      <ProfileContent />
      <RightBar />
    </div>
  );
}

export default Profile;
