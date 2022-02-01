import React from "react";
import BookNow from "../BookNow/BookNow";
import DatePickerComponent from "../Departure/DatePickerComponent";
import FromComponent from "../FromComponent/FromComponent";
import RadioButton from "../RadioButtonComponent/RadioButton";
import Return from "../Return/Return";
import SelectComponent from "../SelectComponent/SelectComponent";
import ToComponent from "../ToComponent/ToComponent";
import VoucherCode from "../VoucherCode/VoucherCode";
import "./formComponent.css";

const FormComponent = () => {
  return (
    <div className="main-form">
      <h1>This is Form</h1>
      <form>
        <RadioButton></RadioButton>
        <div className="row m-1">
          <div className="col-sm-12 col-md-6 col-lg-4 ">
            <FromComponent></FromComponent>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <ToComponent></ToComponent>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="d-flex">
              <DatePickerComponent></DatePickerComponent>
              <Return></Return>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <SelectComponent></SelectComponent>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <VoucherCode></VoucherCode>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <BookNow></BookNow>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
