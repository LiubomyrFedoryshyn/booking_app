import React from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "@interfaces/index";
import {
  MIN_INPUT_LENGTH,
  NUMBER_ERROR,
  REQUIRED_ERROR,
  TEXT_ERROR,
} from "@utils/constants";
import { NUMBERS_ONLY, TEXT_ONLY } from "@utils/regEx";
import classNames from "classnames";

type InputProps = {
  name: Path<IFormValues>;
  label: string;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  placeholder: string;
  errors: any;
  numberType?: boolean;
};

const Input = ({
  label,
  name,
  register,
  required,
  errors,
  numberType,
  placeholder = "Enter a value",
}: InputProps) => (
  <div className="mb-6 lg:mb-0">
    {label && <label className="label">{label}</label>}
    <div>
      <input
        {...register(name, {
          minLength: {
            value: numberType ? MIN_INPUT_LENGTH : 2, // 2 is just a size of possible destination, chould be cpecified
            message: `Should be minimum ${
              numberType ? MIN_INPUT_LENGTH : 2 //s same as above
            } characters`,
          },
          required: required ? REQUIRED_ERROR : false,
          pattern: {
            value: numberType ? NUMBERS_ONLY : TEXT_ONLY,
            message: numberType ? NUMBER_ERROR : TEXT_ERROR,
          },
        })}
        name={name}
        className={classNames("input", {
          "small-input": numberType,
        })}
        type={"text"}
        maxLength={numberType ? 6 : 30}
        placeholder={placeholder}
      />
    </div>
    {errors[name] && <span className="error">{errors[name].message}</span>}
  </div>
);

export default Input;
