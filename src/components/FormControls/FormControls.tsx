// @ts-nocheck
import React from "react";
import s from "./FormContols.module.css";

const FormControl = (props) => {
  console.log("FormControl props:", props);
  const { input, meta, ...restProps } = props;
  // console.dir("Meta: %s", meta);
  const Component = restProps.component;
  const hasError = meta.touched && meta.error;
  const className = hasError ? s.formControl + " " + s.error : s.formControl;

  return (
    <div className={className}>
      <div className={s.formControlWrapper}>
        <Component {...input} {...restProps} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  console.log(`FormControl ${props.name} props:`, props);
  return <FormControl component="textarea" {...props} />;
};

export const Input = (props) => {
  console.log("FormControl Container props:", props);
  return <FormControl component="input" {...props} />;
};
