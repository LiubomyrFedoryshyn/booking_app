import React from "react";

type Button = {
  label?: string;
  buttonDisabled: boolean;
};

const Button = ({ label = "Submit", buttonDisabled }: Button) => {
  return (
    <button
      type="submit"
      disabled={buttonDisabled}
      className="btn rounded-full"
    >
      {label}
    </button>
  );
};

export default Button;
