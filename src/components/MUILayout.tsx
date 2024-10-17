import React from "react";
import { Box, Stack, Divider, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const MUILayout = () => {
  return (
    //available direction - row, column, row-reverse, column-reverse
    <Paper sx={{padding: '32px'}} className="body">
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          //   component="span"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Codevolution
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      <Grid container margin={4} spacing={2}>
        <Grid spacing={3}>
          <Box bgcolor='primary.light' padding={2}>Item 1</Box>
        </Grid>
        <Grid spacing={9}>
          <Box bgcolor='primary.light' p={2}>Item 2</Box>
        </Grid>
        <Grid spacing={9}>
          <Box bgcolor='primary.light' p={2}>Item 3</Box>
        </Grid>
        <Grid spacing={3}>
          <Box bgcolor='primary.light' p={2}>Item 4</Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
