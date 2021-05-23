import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import PropTypes from "prop-types";

const SearchField = ({ array, setArray }) => (
  <Input
    label="Search"
    onChange={(event) => {
      const searchText = event.target.value;
      document.title = "rac".includes("r").toString();
      setArray(
        array.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }}
    startAdornment={
      <InputAdornment>
        <SearchIcon />
      </InputAdornment>
    }
  />
);

SearchField.propTypes = {
  array: PropTypes.arrayOf(PropTypes.object),
  setArray: PropTypes.func,
};

SearchField.defaultProps = {
  array: [],
  setArray: () => {},
};

export default SearchField;
