import React, { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

function MUISwitch() {
  const [checked, setChecked] = useState(true);
  console.log(checked)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={checked} onChange={handleChange} size="small" color="success"/>}
      />
    </Box>
  );
}

export default MUISwitch;
