import React, { useState } from "react";
import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const MUIBadge = () => {
  const [unReadEmails, setUnReadEmails] = useState<number>(0);
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={5} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary" max={999}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary" max={999}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary" max={999} invisible={true}>
        <MailIcon />
      </Badge>
      <Badge
        variant="dot"
        color="primary"
        invisible={unReadEmails === 0}
      >
        <MailIcon />
      </Badge>
    </Stack>
  );
};
