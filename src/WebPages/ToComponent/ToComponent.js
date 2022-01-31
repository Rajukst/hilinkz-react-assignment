import { TextField, Typography } from "@mui/material";
import React from "react";

const ToComponent = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom component="div">
        To
      </Typography>
      <TextField
        id="filled-basic"
        label="Select destination"
        variant="filled"
      />
    </div>
  );
};

export default ToComponent;
