import React from 'react';
import { Container, Row, Col } from 'react-grid';
import { PropTypes } from 'prop-types';

export const SearchBox = (props) => {
  const {
    handleCountryNameChange,
    handlePopulationChange,
    handleSearch,
  } = props;
  return (
    <Container>
      <Col>
        <Row>Country Name:</Row>
        <Row>
          <input type="text" onChange={handleCountryNameChange} />
        </Row>
      </Col>
      <Col>
        <Row>Population:</Row>
        <Row>
          <input type="text" onChange={handlePopulationChange} />
        </Row>
      </Col>
      <Col>
        <Row>
          <button type="button" onClick={handleSearch}>Search!</button>
        </Row>
      </Col>
    </Container>
  );
};

SearchBox.propTypes = {
  handleCountryNameChange: PropTypes.func.isRequired,
  handlePopulationChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
