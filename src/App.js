import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

export const App = () => {
  
  const [countryName, setCountryName] = useState("");
  const [population, setPopulation] = useState(0);
  const [countries, setCountries] = useState({});

  useEffect(() => {
    if (population > 0) {
      document.title = "Country Name: " + countryName + " Population: " + population;
    }
  });

  const doSearch = () => {
    axios.get('https://jsonmock.hackerrank.com/api/countries/search?name=' + countryName)
    .then((response) => getCountryList(response));
  }

  const getCountryList = (results) => {
    console.log(results);
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
      totalResults:results.data.total,
    });
  }
  
  const handleCountryNameChange = (event) => {
      setCountryName(event.target.value);
  };

  const handlePopulationChange = (event) => {
    setPopulation(event.target.value);
  };

  const mapCountriesData = (countries) => {
    const list = countries.map((c) => {
        return (<div>
                    <li>{c.name}</li>
                </div>
                );
    });

    return list;
  }

  return (
    <div>
      <h1>Country Search v2</h1>
      Country Name: <input type="text" onChange={handleCountryNameChange}></input>
      Population: <input type="text" onChange={handlePopulationChange}></input>
      <button onClick={doSearch}>Search!</button>
      <ul>
        {countries.countryList ? mapCountriesData(countries.countryList) : <li></li>}
      </ul>
    </div>
  );
}

export default App;
