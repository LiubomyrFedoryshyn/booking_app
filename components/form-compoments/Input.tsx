import React from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../../interfaces";

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  placeholder: string;
  errors: any;
};

const Input = ({
  label,
  register,
  required,
  errors,
  placeholder = "Place some text here",
}: InputProps) => (
  <div>
    {label && <label className="label">{label}</label>}
    <div>
      <input
        {...register(label, {
          required: required ? "Can’t be blank" : false,
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Only text message allowed",
          },
        })}
        name="Destination"
        className="input"
        type="text"
        placeholder={placeholder}
      />
    </div>
    {errors.Destination && (
      <span className="error">{errors.Destination.message}</span>
    )}
  </div>
);

export default Input;
