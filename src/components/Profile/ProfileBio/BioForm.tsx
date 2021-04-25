import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../FormControls/FormControls";
import { FormProps, ProfileContactsShape } from "../../../types/base";

type ProfileFormData = {
  aboutMe: string,
  fullName: string,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  contacts: ProfileContactsShape,
};
type OwnProps = {
  profile: ProfileFormData,
};

const BioForm = (props: FormProps<OwnProps, OwnProps>) => {
  const {
    profile: {
      aboutMe,
      fullName,
      lookingForAJob,
      lookingForAJobDescription,
      contacts,
    },
    handleSubmit,
    error,
  } = props;
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
export default reduxForm<OwnProps, OwnProps>({ form: "editProfile" })(BioForm);
