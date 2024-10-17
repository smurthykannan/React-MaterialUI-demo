import React from "react";
import { Stack, Skeleton, Box, Typography, Avatar } from "@mui/material";
import { useState, useEffect } from "react";

export const MUISkeleton = () => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  },[])
  return (
    // <Stack spacing={1} width='250px'>
    //     {/* by default variant is text and animatin is pulse */}
    //     <Skeleton />
    //     <Skeleton animation={false}/>
    //     <Skeleton variant='circular' width={40} height={40} animation='wave'/>
    //     <Skeleton variant='rectangular' width={250} height={125} animation='wave'/>
    // </Stack>

    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={256}
          height={144}
          animation="wave"
        />
      ) : (
        <img
          src="https://source.unsplash.com/random/256x44"
          alt="Skeleton"
          width={256}
          height={144}
        />
      )}
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        ) : (
          <Avatar>K</Avatar>
        )}
      </Stack>
      <Stack sx={{ width: "80%" }}>
        {loading ? (
          <>
            <Typography variant="body1">
              <Skeleton variant="text" width="100%" animation="wave" />
            </Typography>
            <Typography variant="body2">
              <Skeleton variant="text" width="100%" animation="wave" />
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="body1">React MUI Tutorial</Typography>
          </>
        )}
      </Stack>
    </Box>
  );
};
