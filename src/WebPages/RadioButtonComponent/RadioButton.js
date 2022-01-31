import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
const RadioButton = () => {
  return (
    <div>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="One Way"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Round Trip"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioButton;
