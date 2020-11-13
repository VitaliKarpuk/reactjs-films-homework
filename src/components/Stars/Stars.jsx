import React from "react";

import "./style.scss";

const Stars = () => {
  const arrNumberStars = [1, 2, 3, 4, 5];
  const value = 3;
  return (
    <div className="stars__raiting">
      {arrNumberStars.map((item, index) => {
        return index + 1 > value ? (
          <span key={item} className="star__rating_inactive">
            &#128970;
          </span>
        ) : (
          <span key={item} className="star__rating_active">
            &#128970;
          </span>
        );
      })}
      <div className="stars__raiting_value">{value}</div>
    </div>
  );
};

export default Stars;
