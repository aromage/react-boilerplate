import React, { TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", children, ...args }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`px-2 py-1 block w-full text-sm rounded-xl border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 ${className}`}
        rows={4}
        {...args}
      >
        {children}
      </textarea>
    );
  }
);

export default Textarea;
