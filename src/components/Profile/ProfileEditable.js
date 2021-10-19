import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import "./ProfileEditable.css";
import "./ProfileContent.css";
import { useStateValue } from "../../StateProvider";

function ProfileEditable({ close }) {
  const value = useStateValue();
  return (
    <div>
      <div className="cross-btn">
        <IconButton onClick={() => close()}>
          <CloseOutlinedIcon />
        </IconButton>
        <h3>Edit Profile</h3>
        <button onClick={() => close()} className="profile-save-btn">
          Save
        </button>
      </div>
      <div className="profile-background1"></div>
      <div className="profile-0">
        <div className="profile-info">
          <IconButton
            sx={{
              position: "relative",
              bottom: "40px",
              background: "white",
              marginLeft: "20px",
              padding: "0px",
            }}
            className="profile-icon-btn"
          >
            <AccountCircleOutlinedIcon sx={{ fontSize: 80 }} />
          </IconButton>
        </div>
      </div>
      <div className="text-fields">
        <TextField
          id="outlined-basic"
          label="Name"
          defaultValue={value.name}
          onChange={(e) => {
            value.name = e.target.value;
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Bio"
          defaultValue={value.bio}
          onChange={(e) => {
            value.bio = e.target.value;
          }}
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Location" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Website"
          defaultValue={value.website}
          variant="outlined"
          onChange={(e) => {
            value.website = e.target.value;
          }}
        />
      </div>
    </div>
  );
}

export default ProfileEditable;
