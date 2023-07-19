import React from "react";

type Button = {
  label?: string;
  onClick: () => void;
  buttonDisabled: boolean;
};

const Button = ({ label = "Submit", onClick, buttonDisabled }: Button) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={buttonDisabled}
      className="btn rounded-full"
    >
      {label}
    </button>
  );
};

export default Button;
