import React, { useEffect, useState } from "react";

import { handleInputKeys } from "../../utils/inputUtils";
import s from "./ProfileStatus.module.css";

const ProfileStatusWH = (props) => {
  // state = {
  // isEditMode: false,
  // status: props.status,
  // };
  const [isEditMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleKeys = (e) => {
    handleInputKeys(e, { keyCode: "Enter", action: deactivateEditMode });
  };

  return (
    <div>
      {isEditMode ? (
        <input
          onChange={onStatusChange}
          type="text"
          name="input-status"
          className={s.inputStatus}
          value={status}
          onBlur={deactivateEditMode}
          onKeyDown={handleKeys}
        />
      ) : (
        <p onClick={activateEditMode}>{props.status}</p>
      )}
    </div>
  );
};

export default ProfileStatusWH;
