import React from "react";
import { Link, useHistory } from "react-router-dom";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import "./StartPage.css";
import Login from "../Login/Login";

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
  px: 4,
  pb: 3,
};

function StartPageSignIn() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useHistory();
  return (
    <div className="start-page">
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <Login />
        </Box>
      </StyledModal>
      <img className="start-img" src="images/front-logo.png" alt="front-logo" />

      <div className="half">
        <img src="images/twitter.png" />
        <h1>Happening </h1>
        <h1>now</h1>
        <h2>Join Twitter Today</h2>
        <div className="signup-btns">
          <button className="signup-btn">Sign in with Google</button>
          <button className="signup-btn">Sign in with Apple</button>
          <button className="signup-btn" onClick={handleOpen}>
            Sign in with Email
          </button>
          <button
            className="signup-btn"
            onClick={() => {
              history.push("/home");
            }}
          >
            Skip Sign in
          </button>
        </div>
        <p className="lt-grey">
          By signing up, you agree to the{" "}
          <a href="https://twitter.com/tos">Terms of Service</a> and{" "}
          <a href="https://twitter.com/privacy">Privacy Policy</a>, including{" "}
          <a href="https://help.twitter.com/rules-and-policies/twitter-cookies">
            Cookie Use.
          </a>
        </p>
        <p>
          Don't have an account? <Link to="/"> Sign up</Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default StartPageSignIn;
