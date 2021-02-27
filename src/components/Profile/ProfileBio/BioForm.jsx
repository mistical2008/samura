import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../FormControls/FormControls";

const BioForm = ({
  profile: {
    aboutMe,
    fullName,
    lookingForAJob,
    lookingForAJobDescription,
    contacts,
  },
  handleSubmit,
  error,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <button>Save</button>
      <br></br>

      {error && <div>{error}</div>}

      <label htmlFor={"fullNameInput"}>Full Name: </label>
      <Field
        component={Input}
        type="text"
        name={"fullName"}
        id={"fullNameInput"}
      />

      <label htmlFor={"aboutMeInput"}>About Me: </label>
      <Field
        component={Input}
        type="text"
        name={"aboutMe"}
        id={"aboutMeInput"}
      />

      <label htmlFor={"lookingForAJobToggleInput"}>Looking for a job: </label>
      <Field
        component={Input}
        type="checkbox"
        name={"lookingForAJob"}
        id={"lookingForAJobToggleInput"}
      />

      <label htmlFor={"lookingForAJobDescriptionInput"}>
        Looking for a job description:
      </label>
      <Field
        component={Input}
        type="text"
        name={"lookingForAJobDescription"}
        id={"lookingForAJobDescriptionInput"}
      />

      {Object.keys(contacts).map((contact) => {
        return (
          <>
            <label htmlFor={contact + "ContactInput"}>{contact}</label>
            <Field
              component={Input}
              type="text"
              name={"contacts." + contact}
              id={contact + "ContactInput"}
            />
          </>
        );
      })}
    </form>
  );
};
export default reduxForm({ form: "editProfile" })(BioForm);
