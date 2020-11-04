import React, { useState } from "react";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import Btn from "../Btn/Btn";

const ModalTrailer = ({ handleBtnInfo }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="movie-hover__icon" onClick={() => setVisible(true)}></div>
      <h3>Watch Now</h3>
      {/* <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of 1000px width
      </Button> */}
      <Btn
        className={"btn__info"}
        title={"View Info"}
        onClick={handleBtnInfo}
      />
      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default ModalTrailer;
