import React from "react";
import { Container, Row, Col } from "react-grid";

export const SearchBox = ({
  handleCountryNameChange,
  handlePopulationChange,
  handleSearch,
}) => {
  return (
    <Container>
      <Col>
        <Row>Country Name:</Row>
        <Row>
          <input type="text" onChange={handleCountryNameChange}></input>
        </Row>
      </Col>
      <Col>
        <Row>Population:</Row>
        <Row>
          <input type="text" onChange={handlePopulationChange}></input>
        </Row>
      </Col>
      <Col>
        <Row>
          <button onClick={handleSearch}>Search!</button>
        </Row>
      </Col>
    </Container>
  );
};