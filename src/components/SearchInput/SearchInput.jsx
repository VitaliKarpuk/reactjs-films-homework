import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchInput = ({ onSearchFilms }) => {
  const [value, setValue] = useState("");
  const onChangeValue = e => {
    setValue(e.target.value);
  };

  const onHandleEnter = ({ key }) => {
    if (key === "Enter") {
      onSearchFilms(value);
    }
  };
  return (
    <div className="header__search">
      <input
        type="text"
        placeholder="the jungle book"
        value={value}
        onChange={onChangeValue}
        onKeyPress={onHandleEnter}
      />
      <span className="header__search-icon"></span>
    </div>
  );
};

SearchInput.propTypes = {
  onSearchFilms: PropTypes.func
};

SearchInput.defaultProps = {
  onSearchFilms: () => {}
};

export default SearchInput;
