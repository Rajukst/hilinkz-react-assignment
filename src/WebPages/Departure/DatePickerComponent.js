import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "./DatePicker.css";
import Stack from "@mui/material/Stack";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
const DatePickerComponent = () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <div>
      <h1>Departure</h1>
      <div className="my-date">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="For desktop"
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
  );
};

export default DatePickerComponent;
