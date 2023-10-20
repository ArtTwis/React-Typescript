import React from "react";
type InputProps = {
  type?: string;
  id?: string;
  className?: string;
  placeHolder?: string;
  value?: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const Input = (props: InputProps) => {
    const {
      type = "text",
      id = "",
      className = "",
      placeHolder = "",
      value = "",
      handleChange,
    } = props;

  return (
    <input
      type={type}
      id={id}
      className={className}
      placeholder={placeHolder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
