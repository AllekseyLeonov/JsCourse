import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import PropTypes from "prop-types";

const SearchField = ({ array, setArray }) => {
  const handleInputChange = (event) => {
    const searchText = event.target.value;
    setArray(
      array.filter(
        (item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase()) ||
          item.content.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <Input
      label="Search"
      onChange={handleInputChange}
      startAdornment={
        <InputAdornment>
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};

SearchField.propTypes = {
  array: PropTypes.arrayOf(PropTypes.object),
  setArray: PropTypes.func,
};

SearchField.defaultProps = {
  array: [],
  setArray: () => {},
};

export default SearchField;
