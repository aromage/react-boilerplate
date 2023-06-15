import React, { ButtonHTMLAttributes } from 'react';
import twFocusClass from 'utils/twFocusClass';

export interface ButtonCircleProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  sizeClass?: string;
}

const ButtonCircle: React.FC<ButtonCircleProps> = ({
  className = '',
  sizeClass = 'w-9 h-9 ',
  ...args
}) => {
  return (
    <button
      className={
        ` text-sm text-neutral-700 sm:text-base font-medium ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 text-neutral-50  ${className} ${sizeClass}` +
        twFocusClass(true)
      }
      {...args}
    />
  );
};

export default ButtonCircle;
