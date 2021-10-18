import React, { useState } from "react";
import { Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import classes from "./Login.module.css";
const CustomButton = styled(Button)`
  padding: "10px";
  border: "none";
  background: "#1d9bf0";
  margin-top: "30px";
  cursor: "pointer";
  color: "white";
  font-size: "1rem";
  font-weight: "bolder";
  border-radius: "50px";

  :hover {
    background: #168ad8;
  }
`;
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={classes.signup}>
        <img className={classes.twitter} src="images/twitter.png" alt="twi" />

        <form onSubmit={submitHandler}>
          <h2>To get started, first enter your email</h2>
          <TextField
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            label="Email"
            sx={{ marginTop: "20px" }}
          />
          <TextField
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            label="Password"
            sx={{ marginTop: "20px" }}
          />
          <CustomButton
            sx={{
              fontSize: "1rem",
              fontWeight: "bolder",
              color: "white",
              borderRadius: "50px",
              background: "#1d9bf0",
              marginTop: "20px",
            }}
            type="submit"
          >
            Sign In
          </CustomButton>
        </form>
      </div>
    </Box>
  );
}

export default Login;
