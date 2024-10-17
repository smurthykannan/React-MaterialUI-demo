import React, { useState } from "react";
import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

export const MUIChips = () => {
    const [chips, setChips] = useState<string[]>(['chip 1','chip 2','chip 3'])
    const handleDelete = (chipToDelete: string) => {
        const result = chips.filter(chip => chip!== chipToDelete)
        setChips(result);
    }
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="medium" icon={<FaceIcon />} />
      <Chip
        label="Chip-outlined"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>K</Avatar>}
        style={{ cursor: "pointer" }}
      />
      <Chip
        label="click"
        color="success"
        onClick={() => alert("chip clicked")}
      />
      <Chip
        label="delete"
        color="error"
        onClick={() => alert("chip clicked")}
        onDelete={() => alert("Delete Handler")}
      />
      {
        chips.map((chip,index)=>(
            <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)}/>
        ))
      }
    </Stack>
  );
};
