import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countryActions from '../redux/actions/countryActions';
import { SearchBox } from './SearchBox';
import { CountriesGrid } from './CountriesGrid';
import { SearchCountriesAPI } from '../api/CountriesApi';


const fillCountryListWithReduxData = (stateFromRedux) => {
  const lastElement = stateFromRedux[stateFromRedux.length - 1];

  const countryList = (lastElement !== undefined
    && lastElement.countries !== undefined
    && lastElement.countries.length > 0)
    ? lastElement.countries
    : [];

  return countryList;
};

const HomePage = ({ actions, stateFromRedux }) => {
  const [countryName, setCountryName] = useState('');
  const [population, setPopulation] = useState(0);

  const countryList = fillCountryListWithReduxData(stateFromRedux);

  // Formats the data coming from API and store it with redux.
  const getCountryList = (results) => {
    // Filtering countries which population is below the user entered,
    const apiData = results.data.data.filter((c) => c.population > population);

    // --Calling saveCountries action dispatcher to store the countries in state (Redux).
    actions.saveCountries(apiData);
  };

  const handleCountryName = (event) => {
    setCountryName(event.target.value);
  };

  const handlePopulation = (event) => {
    setPopulation(event.target.value);
  };

  const doSearch = () => SearchCountriesAPI({ countryName, population })
    .then((results) => getCountryList(results));

  return (
    <>
      <h1>Country Search v2</h1>
      <SearchBox
        handleCountryNameChange={handleCountryName}
        handlePopulationChange={handlePopulation}
        handleSearch={doSearch}
      />
      <br />
      <CountriesGrid countryList={countryList} />
    </>
  );
};

HomePage.propTypes = {
  stateFromRedux: PropTypes.array.isRequired,
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
