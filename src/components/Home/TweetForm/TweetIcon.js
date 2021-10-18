import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
function TweetIcon({ Icon, IconName }) {
  return (
    <div>
      <Tooltip title={IconName}>
        <IconButton color="primary">
          <Icon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default TweetIcon;
