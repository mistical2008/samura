import React, { useEffect, useState } from "react";

import { handleInputKeys } from "../../utils/inputUtils";
import s from "./ProfileStatus.module.css";

const ProfileStatusWH = ({ status, updateUserStatus }) => {
  // state = {
  // isEditMode: false,
  // status: status,
  // };
  const [isEditMode, setEditMode] = useState(false);
  const [newUserStatus, setStatus] = useState(status);

  useEffect(() => {
    setStatus(status);
  }, [status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateUserStatus(newUserStatus);
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
          value={newUserStatus}
          onBlur={deactivateEditMode}
          onKeyDown={handleKeys}
        />
      ) : (
        <p onClick={activateEditMode}>{status}</p>
      )}
    </div>
  );
};

export default ProfileStatusWH;
