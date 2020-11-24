import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const ModalTrailer = ({ className, handleCloseTrailer, trailer }) => {
  return (
    <div className="modal__trailer">
      <div className="modali__trailer_window">
        <button className={className} onClick={handleCloseTrailer}>
          close
        </button>
        <div>
          <iframe src={`https://www.youtube.com/embed/${trailer}`}></iframe>
        </div>
      </div>
    </div>
  );
};

ModalTrailer.propTypes = {
  handleCloseTrailer: PropTypes.func,
  className: PropTypes.string,
  trailer: PropTypes.string
};

ModalTrailer.defaultProps = {
  handleCloseTrailer: () => {},
  className: "",
  trailer: ""
};
export default ModalTrailer;
