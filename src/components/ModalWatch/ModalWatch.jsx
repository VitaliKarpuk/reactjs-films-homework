import React from "react";
import Btn from "../Btn/Btn";
import ModalTrailer from '../ModalTrailer/ModalTrailer';


import "./style.scss"

const ModalWatch = ({ handleBtnInfo }) => {
  return (
    <div className="movie-hover">
      <ModalTrailer handleBtnInfo={handleBtnInfo} className={"btn__info"} title={"View Info"}/>
    </div>
  );
};

export default ModalWatch;
