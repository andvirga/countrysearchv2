import React from 'react';

const CountryDetail = props => {
  const { countryName } = props;
  return <p>{countryName}</p>;
};

export default CountryDetail;
