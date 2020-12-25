export const required = (value) => {
  return value ? undefined : "Field is required";
};

export const maxLength = (maxLength) => {
  return (value) =>
    value && value.length < maxLength
      ? undefined
      : `Text must be ${maxLength} characters or less`;
};

export const minLength = (minLength) => {
  return (value) =>
    value && value.length >= minLength
      ? undefined
      : `Text must be ${minLength} characters or more`;
};

