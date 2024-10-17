import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

export const MUISelect = () => {
  const [countries, setCountries] = useState<string[]>([]);

  console.log("country = ", countries);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
          // renderValue: (selected) => selected.join(', '),
        }}
        color="secondary"
        size="small"
        helperText="Please select your country!"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
        <MenuItem value="SL">Srilanka</MenuItem>
      </TextField>
    </Box>
  );
};
