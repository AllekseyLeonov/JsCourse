import React from "react";
import { Typography } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";

import { SORT_PARAMETERS } from "../../utils/arrayProcessingUtils";

const FilterField = ({ setSortingParameter }) => (
  <div style={{ display: "flex" }}>
    <Typography variant="h5" style={{ paddingRight: "20px" }}>
      Sort by
    </Typography>
    <Select
      defaultValue={SORT_PARAMETERS.dateDescending}
      style={{ flexGrow: "1" }}
      onChange={(event) => setSortingParameter(event.target.value)}
    >
      <MenuItem value={SORT_PARAMETERS.dateAscending}>Date Ascending</MenuItem>
      <MenuItem value={SORT_PARAMETERS.dateDescending}>
        Date Descending
      </MenuItem>
      <MenuItem value={SORT_PARAMETERS.nameAscending}>Name Ascending</MenuItem>
      <MenuItem value={SORT_PARAMETERS.nameDescending}>
        Name Descending
      </MenuItem>
    </Select>
  </div>
);

FilterField.propTypes = {
  setSortingParameter: PropTypes.func,
};

FilterField.defaultProps = {
  setSortingParameter: () => {},
};

export default FilterField;
