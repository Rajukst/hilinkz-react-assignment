import { TextField, Typography } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faLocationArrow,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import "./FromComponent.css";
const FromComponent = () => {
  return (
    <div>
      <Typography
        className="alignment-text"
        variant="h5"
        gutterBottom
        component="div"
      >
        From
      </Typography>

      <TextField
        className="my-from"
        id="filled-basic"
        label="Select Destination"
        variant="filled"
      />
    </div>
  );
};

export default FromComponent;
