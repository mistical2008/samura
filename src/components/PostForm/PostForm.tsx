import React, {ReactElement} from "react";
import {Field, reduxForm} from "redux-form";
import { FormProps } from "../../types/base";
import {maxLength, minLength} from "../../utils/validators/validators";
import {Textarea} from "../FormControls/FormControls";
import s from "./PostForm.module.css";

const maxLength130 = maxLength(130);
const minLength1 = minLength(1);

type FormData = {
  text: string
} & {}

const PostForm = (props: FormProps<FormData>): ReactElement => {

  const {handleSubmit} = props;
  console.log(props);
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

export default reduxForm<FormData>({form: "profile-add-post"})(PostForm);
