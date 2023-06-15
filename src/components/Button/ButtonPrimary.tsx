import Button, { ButtonProps } from "components/Button/Button";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps {}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = "",
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary text-sm disabled:bg-opacity-70 bg-blue-500 hover:bg-blue-500 text-neutral-50 ${className}`}
      {...args}
    />
  );
};

export default ButtonPrimary;
