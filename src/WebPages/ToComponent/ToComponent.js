import { TextField, Typography } from "@mui/material";
import React from "react";

const ToComponent = () => {
  return (
    <div>
      <Typography
        className="alignment-text"
        variant="h5"
        gutterBottom
        component="div"
      >
        To
      </Typography>
      <TextField
        className="my-from"
        id="filled-basic"
        label="Select destination"
        variant="filled"
      />
    </div>
  );
};

export default ToComponent;
