import React from "react";
import preloaderImg from '../../assets/preloader.svg';

import s from "./Preloader.module.css";

const Preloader = (props) => {

  return (
    <div className={s.preloaderWrapper}>
      <img src={preloaderImg} className={s.preloaderImg} />
    </div>
  );
};

export default Preloader;
