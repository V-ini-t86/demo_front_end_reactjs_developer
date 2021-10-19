import React from "react";
import "./SidebarLink.css";

function SidebarLink({ text, Icon, classSide, click }) {
  return (
    <div className="link" onClick={click && click}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarLink;
