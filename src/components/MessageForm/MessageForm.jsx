import React from "react";
import { Field, reduxForm } from "redux-form";

import { maxLength, minLength } from "../../utils/validators/validators";
import { Textarea } from "../FormControls/FormControls";
import s from "./MessageForm.module.css";

const maxLength130 = maxLength(130);
const minLength1 = minLength(1);

const MessageForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={s.messageForm}>
      <Field
        name="new-message-text"
        id="type-text"
        placeholder="Type your text..."
        component={Textarea}
        validate={[minLength1, maxLength130]}
      ></Field>
      <button className={s.buttonMessage}>Post</button>
    </form>
  );
};

export default reduxForm({ form: "dialogsAddMessage" })(MessageForm);
