import React from "react";

import "./style.scss";

const Stars = () => {
  return (
    <div className="stars__raiting">
      <span className="star__rating_active">&#128970;</span>
      <span className="star__rating_active">&#128970;</span>
      <span className="star__rating_active">&#128970;</span>
      <span className="star__rating_inactive">&#128970;</span>
      <span className="star__rating_inactive">&#128970;</span>
      <div className="stars__raiting_value">3</div>
    </div>
  );
};

export default Stars;
