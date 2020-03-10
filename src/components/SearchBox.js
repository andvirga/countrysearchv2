import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { PropTypes } from 'prop-types';

export const SearchBox = props => {
  const {
    handleCountryNameChange,
    handlePopulationChange,
    handleSearch,
  } = props;
  return (
    <Container maxwidth="sm">
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <TextField
            label="Country Name"
            variant="outlined"
            onChange={handleCountryNameChange}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Population"
            variant="outlined"
            onChange={handlePopulationChange}
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search!
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

SearchBox.propTypes = {
  handleCountryNameChange: PropTypes.func.isRequired,
  handlePopulationChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
