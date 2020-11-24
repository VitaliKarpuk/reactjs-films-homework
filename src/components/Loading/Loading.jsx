import React from "react";

import "./style.scss";

const Loading = () => {
  return (
    <div className="loading">
      <ul>
        <li className="red"></li>
        <li className="blue"></li>
        <li className="violet"></li>
      </ul>
      <h3>LOADING</h3>
    </div>
  );
};

export default Loading;
