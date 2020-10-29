import React from "react";
import s from "./Userpic.module.css";

const Userpic = (props) => {
  return (
    <div className={s.imgContainer}>
      <img
        src={
          props.src ||
          "http://activerain.com/image_store/uploads/8/5/6/3/5/ar125466439853658.jpg"
        }
        alt={props.alt || ""}
      />
    </div>
  );
};

export default Userpic;
