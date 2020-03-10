import React, { Fragment, useEffect, useState } from "react";
import { SearchBox } from "./SearchBox";
import { CountriesGrid } from "./CountriesGrid";
import { SearchCountry } from "../Helpers/Endpoints";

const HomePage = props => {
  const [countryName, setCountryName] = useState("");
  const [population, setPopulation] = useState(0);
  const [countries, setCountries] = useState({});

  useEffect(() => {
    if (population > 0) {
      document.title =
        "Country Name: " + countryName + " Population: " + population;
    }
  });

  const getCountryList = results => {
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
    return SearchCountry(countryName).then(results => getCountryList(results));
  };

  //const { handleCountryName, handlePopulation, doSearch, countries } = props;
  return (
    <Fragment>
      <h1>Country Search v2</h1>
      <SearchBox
        handleCountryNameChange={handleCountryName}
        handlePopulationChange={handlePopulation}
        handleSearch={doSearch}
      />
      <br />
      <CountriesGrid countryList={countries.countryList} />
    </Fragment>
  );
};

export default HomePage;
