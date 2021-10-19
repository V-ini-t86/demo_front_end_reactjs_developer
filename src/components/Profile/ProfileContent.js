import { Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import {
  Link,
  Switch,
  useRouteMatch,
  Route,
  useParams,
  useLocation,
  useHistory,
} from "react-router-dom";
import React from "react";
import "./ProfileContent.css";
import ProfileEditable from "./ProfileEditable";
import { useStateValue } from "../../StateProvider";
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 500,
  bgcolor: "white",
  border: "none",
  borderRadius: "10px",
  p: 2,
  px: 0,
  pb: 3,
};

const EditButton = styled(Button)({
  background: "white",
  width: "auto",
  borderRadius: "20px",
  height: "40px",
  color: "black",
  fontWeight: "bold",
  border: "1px solid lightgrey",
  marginTop: "10px",
  marginRight: "10px",
});

function ProfileContent() {
  let { path, url } = useRouteMatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useHistory();
  const location = useLocation();
  const value = useStateValue();
  return (
    <div className="profile-content">
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <ProfileEditable close={handleClose} />
        </Box>
      </StyledModal>

      <div className="profile-nav">
        <IconButton
          sx={{ marginRight: "20px" }}
          onClick={() => {
            history.push("/home");
          }}
        >
          <ArrowBackIcon fontSize="small" />
        </IconButton>
        <h3>{value.name}</h3>
      </div>
      <div className="profile-background"></div>
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
          <div className="profile-name">
            <h4>{value.name}</h4>
            <h4 className="user-name">@{value.name}</h4>
          </div>
        </div>
        <EditButton onClick={handleOpen}>Edit Profile</EditButton>
      </div>
      <p className="profile-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        repellendus distinctio officia voluptatem nam natus deleniti tempora
        minus quas laborum vitae voluptate nisi assumenda aliquam, dolores
        consequuntur recusandae voluptatibus nihil.
      </p>
      <p className="user-loc">
        <LocationOnOutlinedIcon sx={{ marginRight: "10px" }} /> India, Delhi
        <CalendarTodayOutlinedIcon
          sx={{ marginRight: "10px", marginLeft: "10px" }}
        />{" "}
        Joined 2020
      </p>
      <p className="follow">
        <Link style={{ color: "black", textDecoration: "none" }}>
          0 <span className="follw-link"> Following </span>
        </Link>
        <Link
          style={{ marginLeft: "10px", color: "black", textDecoration: "none" }}
        >
          0 <span className="follw-link">Followers</span>
        </Link>
      </p>
      <div className="profile-tweets">
        <Link
          className={`profile-tweets-link ${
            location.pathname === "/profile" && " profile-tweets-click"
          }`}
          to={`${url}`}
        >
          Tweets
        </Link>
        <Link
          className={`profile-tweets-link ${
            location.pathname === `${url}/with_replies` &&
            " profile-tweets-click"
          }`}
          to={`${url}/with_replies`}
        >
          Tweets & Replies
        </Link>
        <Link
          className={`profile-tweets-link ${
            location.pathname === `${url}/media` && " profile-tweets-click"
          }`}
          to={`${url}/media`}
        >
          Media
        </Link>
        <Link
          className={`profile-tweets-link ${
            location.pathname === `${url}/likes` && " profile-tweets-click"
          }`}
          to={`${url}/likes`}
        >
          Likes
        </Link>
      </div>
      <Switch>
        <Route exact path={path}></Route>
        <Route path={`${path}/:tweetInfo`}>
          <TweetInfo />
        </Route>
      </Switch>
    </div>
  );
}

export default ProfileContent;

function TweetInfo() {
  let { tweetInfo } = useParams();
  return (
    <div className="tweetInfo">
      <h2>{tweetInfo}</h2>
    </div>
  );
}
