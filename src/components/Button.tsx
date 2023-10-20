import React from "react";
type ButtonProps = {
  id?: string;
  className?: string;
  buttonText?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
  const { buttonText = "Click", id = "", className = "", handleClick } = props;

  return (
    <button id={id} className={className} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default Button;
