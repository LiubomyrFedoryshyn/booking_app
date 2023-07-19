import React from "react";
import { FormProps } from "../../interfaces";

const RoomSelector = ({ label, placeholder = "Set a value" }: FormProps) => (
  <div>
    {label && <label className="label">{label}</label>}
    <div>
      <input className="input" type="text" placeholder={placeholder} />
    </div>
  </div>
);

export default RoomSelector;
