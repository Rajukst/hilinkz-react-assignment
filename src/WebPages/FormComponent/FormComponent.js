import React from "react";
import DatePickerComponent from "../Departure/DatePickerComponent";
import FromComponent from "../FromComponent/FromComponent";
import RadioButton from "../RadioButtonComponent/RadioButton";
import Return from "../Return/Return";
import SelectComponent from "../SelectComponent/SelectComponent";
import ToComponent from "../ToComponent/ToComponent";

const FormComponent = () => {
  return (
    <div>
      <h1>This is Form</h1>
      <form>
        <RadioButton></RadioButton>
        <FromComponent></FromComponent>
        <ToComponent></ToComponent>
        <DatePickerComponent></DatePickerComponent>
        <Return></Return>
        <SelectComponent></SelectComponent>
      </form>
    </div>
  );
};

export default FormComponent;
