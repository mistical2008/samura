import React, {ComponentType} from "react";
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {maxLength, minLength} from "../../utils/validators/validators";
import {Textarea} from "../FormControls/FormControls";
import s from "./PostForm.module.css";

const maxLength130 = maxLength(130);
const minLength1 = minLength(1);

const PostForm: ComponentType<InjectedFormProps<{}, {}, string>> = ({handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit} className={s.postForm}>
      <Field
        name="text"
        id="post-text"
        placeholder="Type your text..."
        component={Textarea}
        validate={[minLength1, maxLength130]}
      ></Field>
      <div className="u-block">
        <button type="submit">Post</button>
      </div>
    </form>
  );
};

export default reduxForm({form: "profile-add-post"})(PostForm);
