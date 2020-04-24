import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countryActions from '../redux/actions/countryActions';
import { SearchBox } from './SearchBox';
import { CountriesGrid } from './CountriesGrid';
import { SearchCountriesAPI } from '../api/CountriesApi';
import { Container, Typography } from '@material-ui/core';
import './HomePage.css';

const HomePage = ({ actions, stateFromRedux }) => {
  const [countryName, setCountryName] = useState('');
  const [population, setPopulation] = useState(0);

  // Formats the data coming from API and store it with redux.
  const getCountryList = () => {
    // Filtering countries which population is below the user entered,
    const filteredResults = stateFromRedux.countries.filter((c) => c.population > population);

    return filteredResults;
  };

  const handleCountryName = (event) => {
    setCountryName(event.target.value);
  };

  const handlePopulation = (event) => {
    setPopulation(event.target.value);
  };

  const doSearch = () => {
    actions.saveFilters({ countryName, population });

    SearchCountriesAPI({ countryName, population }).then((results) => {
      // --Calling saveCountries action dispatcher to store the countries in state (Redux).
      actions.saveCountries(results.data.data);
    });
  };

  return (
    <>
      <Container>
        <div className='title'>
          <Typography variant='h4'>Country Search v2</Typography>
        </div>
        <SearchBox
          handleCountryNameChange={handleCountryName}
          handlePopulationChange={handlePopulation}
          handleSearch={doSearch}
        />
        <br />
        <CountriesGrid countryList={getCountryList()} />
      </Container>
    </>
  );
};

HomePage.propTypes = {
  stateFromRedux: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

// --The state from redux is always mapped to the props with this method
function mapStateToProps(state) {
  return {
    stateFromRedux: state.countryReducer,
  };
}

// --The actipn dispatchers are always mapped to the props with this method
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(countryActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
