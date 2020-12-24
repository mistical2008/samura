import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './MessageForm.module.css'
import { maxLength, minLength, required } from "../../utils/validators/validators";

const maxLength130 = maxLength(130);
const minLength2 = minLength(2);


const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.formControl}>
        <Field
          className={s.inputText}
          name="new-message-text"
          id="type-text"
          cols="30"
          rows="10"
          placeholder="Type your text..."
          component="textarea"
          validate={[required, maxLength130, minLength2]}
        ></Field>
        <span>Error</span>
      </div>
      <button className={s.buttonMessage}>
        Post
      </button>
    </form>
  )
}


export default reduxForm({form: "dialogsAddMessage"})(AddMessageForm)
