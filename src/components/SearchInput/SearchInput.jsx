import React, { useState } from "react";
import { useDispatch } from "react-redux";
import requestSearchFilms from "../../modules/actions/requestSearchFilms";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onChangeValue = e => {
    setValue(e.target.value);
  };

  const onHandleEnter = ({ key }) => {
    if (key === "Enter") {
      dispatch(requestSearchFilms(value));
      setValue('')
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

export default SearchInput;
