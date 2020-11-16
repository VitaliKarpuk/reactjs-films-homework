import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const ModalTrailer = ({ className, title, handleCloseTrailer }) => {
  return (
    <div className="modal__trailer">
      <div className="modali__trailer_window">
        <button className={className} onClick={handleCloseTrailer}>
          close
        </button>
        <div>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

ModalTrailer.propTypes = {
  handleBtnInfo: PropTypes.func,
  handleCloseTrailer: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string
};

ModalTrailer.defaultProps = {
  handleBtnInfo: () => {},
  handleCloseTrailer: () => {},
  className: "",
  title: ""
};
export default ModalTrailer;
