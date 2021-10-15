import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SelectForm from "./Select/Select";
import classes from "./SignUp.module.css";

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
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={classes.signup}>
        <form>
          <h1>Create your account</h1>
          <TextField type="text" label="Name" className={classes.input} />
          <TextField type="email" label="Email" className={classes.input} />

          <h3 className="mt-3">Date of Birth</h3>
          <p className="lt-grey">
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>
          <div className={classes.dob}>
            <SelectForm name="Month" width="46%" data={months} />
            <SelectForm name="Day" width="20%" data={days} />
            <SelectForm name="Year" width="30%" data={years} />
          </div>
          <button className={classes.nextBtn}>Next</button>
        </form>
      </div>
    </Box>
  );
}

export default SignUp;
