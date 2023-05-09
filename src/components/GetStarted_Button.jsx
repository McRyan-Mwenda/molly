import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-green-gradient font-poppins font-medium text-[18px] text-primary  rounded-[25px] outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
