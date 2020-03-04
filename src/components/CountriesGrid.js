import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid';

const mapCountriesData = (countries) => {
  const list = countries.map((c) => {
    const url = `https://www.countryflags.io/${c.alpha2Code}/flat/64.png`;
    const alt = `${c.name} flag`;
    return (
      <Row>
        <Col>{c.name}</Col>
        <Col>{c.capital}</Col>
        <Col>{c.population}</Col>
        <Col>
          <img src={url} alt={alt} />
        </Col>
      </Row>
    );
  });

  return list;
};

export const CountriesGrid = (props) => {
  const { countryList } = props;
  return (
    <Container>
      <Row>
        <Col>
          <b>Country</b>
        </Col>
        <Col>
          <b>Capital</b>
        </Col>
        <Col>
          <b>Population</b>
        </Col>
        <Col>
          <b>Flag</b>
        </Col>
      </Row>
      {countryList ? mapCountriesData(countryList) : ''}
    </Container>
  );
};

CountriesGrid.propTypes = {
  countryList: PropTypes.array,
};

CountriesGrid.defaultProps = {
  countryList: [],
};
