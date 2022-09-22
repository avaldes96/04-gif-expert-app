import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategories = ({ setCategoties }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategoties((categ) => [inputValue, ...categ]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategories.propTypes = {
  setCategoties: PropTypes.func.isRequired,
};
