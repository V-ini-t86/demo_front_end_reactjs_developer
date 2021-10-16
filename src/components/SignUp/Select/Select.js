import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

function SelectForm({ name, width, data, setDob, dob }) {
  const handleChange = (e) => {
    setDob(e.target.value);
  };

  return (
    <FormControl
      sx={{
        width: width,
      }}
    >
      <InputLabel id="demo-simple-select-label">{name}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={dob}
        label={name}
        onChange={handleChange}
      >
        {data.map((val, i) => {
          return (
            <MenuItem key={i} value={val}>
              {val}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default SelectForm;
