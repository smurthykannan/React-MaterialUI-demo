import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

export const MUISpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      //   icon ={<SpeedDialIcon openIcon={<EditIcon />}/>}
      icon={<SpeedDialIcon />}
      sx={{ position: "absolute", bottom: 16, right: 16 }}
    >
      <SpeedDialAction
        icon={<FileCopyIcon />}
        tooltipTitle="Copy"
        tooltipOpen
      />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
    </SpeedDial>
  );
};
