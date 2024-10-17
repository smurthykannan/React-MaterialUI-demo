import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

export const MUICard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React makes it easy to create interactive UIs by designing simple
            views for each state in your application that helps developers build
            user interfaces (UIs) for web and mobile platforms.
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={()=>alert('share the content')} size="small">Share</Button>
          <Button onClick={()=>alert('Learn more to become well')} size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
