import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as countryActions from '../redux/actions/countryActions';
import { bindActionCreators } from 'redux';
import { SearchBox } from './SearchBox';
import { CountriesGrid } from './CountriesGrid';
import { SearchCountry } from '../Helpers/Endpoints';

const HomePage = props => {
  const { country } = props;
  const [countryName, setCountryName] = useState('');
  const [population, setPopulation] = useState(0);
  const [countries, setCountries] = useState({});

  useEffect(() => {
    if (population > 0) {
      document.title =
        'Country Name: ' + countryName + ' Population: ' + population;
    }
  });

  const getCountryList = results => {
    var countries = [];
    var countriesData = results.data.data;
    for (var i = 0; i < countriesData.length; i++) {
      if (countriesData[i].population > population) {
        countries.push(countriesData[i]);
      }
    }

    setCountries({
      countryList: countries,
      currentPage: results.data.page,
      resultsPerPage: results.data.per_page,
      totalPages: results.data.total_pages,
      totalResults: results.data.total,
    });
  };

  const handleCountryName = event => {
    setCountryName(event.target.value);
  };

  const handlePopulation = event => {
    setPopulation(event.target.value);
  };

  const doSearch = () => {
    props.actions.searchCountry({
      countryName: countryName,
      population: population,
    });
    return SearchCountry(countryName).then(results => getCountryList(results));
  };

  return (
    <>
      <h1>Country Search v2</h1>
      <SearchBox
        handleCountryNameChange={handleCountryName}
        handlePopulationChange={handlePopulation}
        handleSearch={doSearch}
      />
      <br />
      {country}
      <CountriesGrid countryList={countries.countryList} />
    </>
  );
};

function mapStateToProps(state) {
  return {
    country: state.countryName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(countryActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
