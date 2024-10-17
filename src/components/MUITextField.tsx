import { Stack, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";

export const MUITextField = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <TextField label="name" variant="outlined" />
          <TextField label="name" variant="filled" />
          <TextField label="name" variant="standard" />
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField label="small secondary" size="small" color="secondary" />
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField
            label="form input"
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={!value}
            helperText={!value? 'Required' : 'Do not share your password with anyone'}
          />
          <TextField
            label="Password"
            type="password"
            helperText="Do not share your password to anyone"
          />
          <TextField
            label="Password"
            type="password"
            disabled
            helperText="Password field with disabled property"
          />
          <TextField label="Read Only" InputProps={{ readOnly: true }} />
        </Stack>
        {/* input with adornments */}
        <Stack spacing={2} direction="row">
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </div>
  );
};
