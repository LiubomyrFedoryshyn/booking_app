import React from "react";

type Button = {
  label?: string;
  buttonDisabled: boolean;
  className: string;
};

const Button = ({ label = "Submit", buttonDisabled, className }: Button) => {
  return (
    <button type="submit" disabled={buttonDisabled} className={className}>
      {label}
    </button>
  );
};

export default Button;
