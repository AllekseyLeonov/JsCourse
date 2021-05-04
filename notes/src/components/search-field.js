import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
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
