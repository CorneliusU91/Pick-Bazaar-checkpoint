import React from "react";

const MainInput = ({ placeHolder, className, type, ...rest }) => {
  return (
    <input
      placeholder={placeHolder || "Enter text here"}
      className={className}
      type={type}
      {...rest}
    />
  );
};

export default MainInput;
