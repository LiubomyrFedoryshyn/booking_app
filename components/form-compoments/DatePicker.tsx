import React from "react";
import { FormProps } from "../../interfaces";

const DatePicker = ({ label, placeholder = "Pick up a date" }: FormProps) => (
  <div>
    {label && <label className="label">{label}</label>}
    <div>
      <input className="input" type="text" placeholder={placeholder} />
    </div>
  </div>
);

export default DatePicker;
