import React from "react";
import s from "./FormContols.module.css";

const FormControl = ({ input, meta, ...restProps }) => {
  console.dir("Meta: %s", meta);
  const Component = restProps.component;
  const hasError = meta.touched && meta.error;
  const className = hasError ? s.formControl + " " + s.error : s.formControl;

  return (
    <div className={className}>
      <div>
        <Component {...input} {...restProps} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  return <FormControl component="textarea" {...props} />;
};

export const Input = (props) => {
  return <FormControl component="input" {...props} />;
};
