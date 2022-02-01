import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "./DatePicker.css";
import Stack from "@mui/material/Stack";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { Typography } from "@mui/material";
const DatePickerComponent = () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <div>
      <Typography
        className="alignment-text"
        variant="h5"
        gutterBottom
        component="div"
      >
        Departure
      </Typography>
      <div className="my-date">
        <div className="my-datePicker">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                value={value}
                minDate={new Date("2017-01-01")}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
};

export default DatePickerComponent;
