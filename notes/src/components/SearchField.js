import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";

const SearchField = () => (
  <Input
    label="Search"
    startAdornment={
      <InputAdornment>
        <SearchIcon />
      </InputAdornment>
    }
  />
);

export default SearchField;
