import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const emptyResults = () => (
  <Grid item xs={12}>
    <b>No country matches the entered criteria!</b>
  </Grid>
);

const mapCountriesData = countries => {
  let list = countries.map(c => {
    const url = `https://www.countryflags.io/${c.alpha2Code}/flat/64.png`;
    const alt = `${c.name} flag`;
    return (
      <>
        <Grid item xs={3}>
          {c.name}
        </Grid>
        <Grid item xs={3}>
          {c.capital}
        </Grid>
        <Grid item xs={3}>
          {c.population}
        </Grid>
        <Grid item xs={3}>
          <img src={url} alt={alt} />
        </Grid>
      </>
    );
  });

  return list;
};

export const CountriesGrid = props => {
  const { countryList } = props;
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <b>Country</b>
        </Grid>
        <Grid item xs={3}>
          <b>Capital</b>
        </Grid>
        <Grid item xs={3}>
          <b>Population</b>
        </Grid>
        <Grid item xs={3}>
          <b>Flag</b>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        {countryList.length > 0
          ? mapCountriesData(countryList)
          : emptyResults()}
      </Grid>
    </Container>
  );
};

CountriesGrid.propTypes = {
  countryList: PropTypes.array,
};

CountriesGrid.defaultProps = {
  countryList: [],
};
