import React, { useState } from "react";
import PropTypes from 'prop-types';
import "antd/dist/antd.css";
import { Modal } from "antd";
import Btn from "../Btn/Btn";

const ModalTrailer = ({ handleBtnInfo, className, title }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="movie-hover__icon" onClick={() => setVisible(true)}></div>
      <h3>Watch Now</h3>
      <Btn
        className={className}
        title={title}
        onClick={title=== 'View Info' ? handleBtnInfo : () => setVisible(true)}
      />
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1500}
      >
        <h2>Trailer</h2>
      </Modal>
    </>
  );
};

ModalTrailer.propTypes = {
  handleBtnInfo: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string
}

export default ModalTrailer;
