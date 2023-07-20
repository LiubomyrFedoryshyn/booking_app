import React from "react";
import { Controller } from "react-hook-form";
import Datepicker from "react-tailwindcss-datepicker";
import { REQUIRED_ERROR } from "@utils/constants";

type InputProps = {
  label: string;
  required: boolean;
  placeholder: string;
  errors: any;
  control: any;
  name: string;
};

const DatePicker = ({
  label,
  required,
  errors,
  control,
  placeholder = "Pick up a date",
}: InputProps) => {
  return (
    <div className="date-picker mb-6 lg:mb-0">
      {label && <label className="label">{label}</label>}
      <Controller
        name="Dates"
        control={control}
        rules={{ required: required ? REQUIRED_ERROR : false }}
        render={({ field: { onChange, value } }) => {
          return (
            <Datepicker
              separator={"-"}
              readOnly
              minDate={new Date()}
              startWeekOn="mon"
              placeholder={placeholder}
              primaryColor={"red"}
              value={value}
              displayFormat={"MMM-DD"}
              onChange={onChange}
            />
          );
        }}
      />
      {errors.Dates && <span className="error">{errors.Dates.message}</span>}
    </div>
  );
};

export default DatePicker;
