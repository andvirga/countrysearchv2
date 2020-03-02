import axios from "axios";

export const SearchCountry = (countryName) => {
  return axios
    .get(
      "https://jsonmock.hackerrank.com/api/countries/search?name=" + countryName
    )
    .then(response => {
      return response;
    });
};