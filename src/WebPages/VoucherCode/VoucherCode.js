import { TextField, Typography } from "@mui/material";
import React from "react";

const VoucherCode = () => {
  return (
    <div>
      <Typography
        className="alignment-text"
        variant="h5"
        gutterBottom
        component="div"
      >
        Voucher or event code
      </Typography>
      <TextField
        className="my-from"
        id="standard-basic"
        label="Enter code"
        variant="standard"
      />
    </div>
  );
};

export default VoucherCode;
