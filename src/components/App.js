import React, { useState, useEffect } from 'react';
import { SearchBox } from './SearchBox';
import { CountriesGrid } from './CountriesGrid';
import { SearchCountry } from '../Helpers/Endpoints';
import '../styles/App.css';

export const App = () => {
  const [countryName, setCountryName] = useState('');
  const [population, setPopulation] = useState(0);
  const [countries, setCountries] = useState({});

  useEffect(() => {
    if (population > 0) {
      document.title = `Country Name: ${countryName} Population: ${population}`;
    }
  });

  const getCountryList = (results) => {
    // console.log(results);
    const countries = [];
    const countriesData = results.data.data;
    for (let i = 0; i < countriesData.length; i++) {
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

  const handleCountryName = (event) => {
    setCountryName(event.target.value);
  };

  const handlePopulation = (event) => {
    setPopulation(event.target.value);
  };

  const doSearch = () => SearchCountry(countryName).then((results) => getCountryList(results));

  return (
    <div>
      <h1>Country Search v2</h1>
      <SearchBox
        handleCountryNameChange={handleCountryName}
        handlePopulationChange={handlePopulation}
        handleSearch={doSearch}
      />
      <br />
      <CountriesGrid countryList={countries.countryList} />
    </div>
  );
};

export default App;
