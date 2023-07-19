import React from "react";
import { FormProps } from "../../interfaces";

const Input = ({ label, placeholder = "Place some text here" }: FormProps) => (
  <div>
    {label && <label className="label">{label}</label>}
    <div>
      <input className="input" type="text" placeholder={placeholder} />
    </div>
  </div>
);

export default Input;
