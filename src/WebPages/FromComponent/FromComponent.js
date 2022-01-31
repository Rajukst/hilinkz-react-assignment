import { TextField } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faLocationArrow,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
const FromComponent = () => {
  return (
    <div>
      <h1>This is From Component</h1>
      <FontAwesomeIcon icon={faSearchLocation} />
      <TextField
        id="filled-basic"
        label="Select Destination"
        variant="filled"
      />
    </div>
  );
};

export default FromComponent;
