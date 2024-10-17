import React from "react";
import { Link, Stack, Typography } from "@mui/material";

export const MUILink = () => {
  return (
    <Stack spacing={2} direction="row" margin={4}>
      <Link href="#">Link</Link>
      <Link href="#" variant="body2">Link-body2</Link>
      <Link href="#" color="secondary" underline="hover">
        Secondary-hover
      </Link>
      <Link href="#" color="secondary" underline="none">
        Secondary-none
      </Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="none">
          Secondary-Typography
        </Link>
      </Typography>
    </Stack>
  );
};
