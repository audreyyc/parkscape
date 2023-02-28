// Code for Layout derived from React Bootstrap Documentation
// Code to retrieve data derived from https://gitlab.com/danbotMBM/cs373-idb-11-5/-/blob/main/front-end/src/pages/Countries/CountryInstance.js
import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
// import axios from 'axios';
import city_json from './city_sample.json';

function CityInstance() {
    
  const cityData = city_json['data'][2];

  return (
    <>
      <Container className="container text-center mt-5">

        <Container className="mt-5">
            <h1>{cityData.name}</h1>
            <h3>{cityData.state}</h3>
            <h4>{cityData.latitude}, {cityData.longitude}</h4>
        </Container>


        <Image src={cityData.image}
        className="img-fluid mt-5"
        alt={cityData.name}>   
        </Image>


        <Container className="d-flex justify-content-center mt-4">
          <Table className="table fs-5" striped>
            <tbody>
              <tr>
                <td>
                  <b>Population</b>
                </td>
                <td>{cityData.population}</td>
              </tr>
              <tr>
                <td>
                  <b>Travel Cost</b>
                </td>
                <td>{cityData.cost} ({cityData.cost_text})</td>
              </tr>
              <tr>
                <td>
                  <b>Safety</b>
                </td>
                <td>{cityData.safety} ({cityData.safety_text})</td>
              </tr>
              <tr>
                <td>
                  <b>Average Rating</b>
                </td>
                <td>{cityData.rating}</td>
              </tr>
            </tbody>
          </Table>
        </Container>


        <Container className="d-flex mt-5 justify-content-center">
            <Container className="list-group-item border-0">
                <Button href={cityData.airbnb_listings} variant="outline-primary" size="lg">AirBnB Listings</Button>
            </Container>
            <Container className="list-group-item border-0">
                <Button href={cityData.walkability} variant="outline-primary" size="lg">City Walkability Score</Button>
            </Container>
            <Container className="list-group-item border-0">
                <Button href={cityData.hiking_trails} variant="outline-primary" size="lg">Hiking Trails</Button>
            </Container>
        </Container>


        <Container className="d-flex my-5">
          <iframe
            title="map"
            className="map"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="600"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAa0pVSA26KxyWPdzXupgd8-OTjlsq_Rvc&q=${cityData.name}`}
          ></iframe>
        </Container>


        <Container className="my-5">
          <Row>
            <Col>
              <Card>
                <Card.Header as="h5">Nearest Cities</Card.Header>
                <Card.Body>
                  <Container className="my-3">
                    <Button variant="primary">{cityData.nearest_airports[0].name}</Button>
                  </Container>
                  <Container className="my-3">
                    <Button variant="primary">{cityData.nearest_airports[1].name}</Button>
                  </Container>
                  <Container className="my-3">
                    <Button variant="primary">{cityData.nearest_airports[2].name}</Button>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header as="h5">Nearest Parks</Card.Header>
                <Card.Body>
                <Container className="my-3">
                    <Button variant="primary">{cityData.nearest_parks[0].name}</Button>
                  </Container>
                  <Container className="my-3">
                    <Button variant="primary">{cityData.nearest_parks[1].name}</Button>
                  </Container>
                  <Container className="my-3">
                    <Button variant="primary">{cityData.nearest_parks[2].name}</Button>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </Container>
    </>
  );
  }
  
  export default CityInstance;