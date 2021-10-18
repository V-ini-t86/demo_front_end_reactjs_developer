import { Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import SelectForm from "./Select/Select";
import classes from "./SignUp.module.css";

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
const months = [
  "January",
  "Februaru",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31,
];

const years = [
  1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003,
  2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
  2017, 2018, 2019, 2020, 2021,
];

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      !email.includes("@") ||
      month.length === 0 ||
      day === "" ||
      year === ""
    ) {
      return;
    } else {
      console.log(name, email, month, day, year);
    }
  };

  const nextHandler = () => {
    if (
      name.length === 0 ||
      !email.includes("@") ||
      month.length === 0 ||
      day === "" ||
      year === ""
    ) {
      return;
    } else {
      console.log(name, email, month, day, year);
    }
  };

  const step2 = (
    <div>
      <h3>Customize your experience</h3>
      <h4>Track where you see Twitter content across the web</h4>
      <p>
        Twitter uses this data to personalize your experience. This web browsing
        history will never be stored with your name, email, or phone number.
      </p>
      <p className="lt-grey">
        For more details about these settings, visit the Help Center.
      </p>
      <FormControlLabel
        value="start"
        control={<Checkbox />}
        label="Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number."
        labelPlacement="start"
      />
    </div>
  );

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
          <h1>Create your account</h1>
          <TextField
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            label="Name"
            sx={{ marginTop: "20px" }}
          />
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

          <h3 className="mt-3">Date of Birth</h3>
          <p className="lt-grey">
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>
          <div className={classes.dob}>
            <SelectForm
              name="Month"
              width="46%"
              data={months}
              setDob={setMonth}
              dob={month}
            />
            <SelectForm
              name="Day"
              width="20%"
              data={days}
              setDob={setDay}
              dob={day}
            />
            <SelectForm
              name="Year"
              width="30%"
              data={years}
              setDob={setYear}
              dob={year}
            />
          </div>

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
            Sign Up
          </CustomButton>
        </form>
      </div>
    </Box>
  );
}

export default SignUp;
