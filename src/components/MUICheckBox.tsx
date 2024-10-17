import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const MUICheckBox = () => {
  const [acceptTnc, setAcceptTnc] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log(skills);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(event.target.checked);
  };
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value)
    if(index === -1){
        setSkills([...skills, event.target.value])
    }
    else{
        setSkills(skills.filter((skills)=> skills !== event.target.value))
    }
  }

  return (
    <Box>
      <Box>
        <FormControlLabel 
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTnc} size='small' color="secondary" onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnc}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange} />}
            />
            <FormControlLabel
              label="CSS" value="css"
              control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange} />}
            />
            <FormControlLabel
              label="JAVASCRIPT" value="javascript"
              control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange} />}
            />
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};
