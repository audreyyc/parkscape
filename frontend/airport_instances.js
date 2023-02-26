// Code for Layout derived from React Bootstrap Documentation
// Code to retrieve data derived from https://gitlab.com/danbotMBM/cs373-idb-11-5/-/blob/main/front-end/src/pages/Countries/CountryInstance.js
import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import axios from 'axios';
import airport_json from './airport_sample.json';

function AirportsInstances() {
  // const API = "";

  // const [airportData, setAirportData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [tryAgain, setTryAgain] = useState(false);

  // useEffect(() => {
  //     setLoading(true);
  //     axios.get(API)
  //         .then((response) => {
  //             setAirportData(response.data);
  //         })
  //         .catch(function (error) {
  //             console.error(error);
  //         })
  //         .then(function () {
  //             setLoading(false);
  //             setTryAgain(false);
  //         });
  // }, [API, tryAgain]);

  const airportData = airport_json['data'][0];

  return (
    <>
      <Container className="container text-center mt-5">

        <Container className="mt-5">
          <h1>{airportData.iata_code}</h1>
          <h2>{airportData.name}</h2>
          <h4>{airportData.city}, {airportData.state}</h4>
        </Container>


        <Container className="d-flex mt-5 justify-content-center">
          <Button href={airportData.website} variant="outline-primary" size="lg">Website</Button>
        </Container>


        <Container className="d-flex justify-content-center mt-4">
          <Table className="table fs-5" striped>
            <tbody>
              <tr>
                <td>
                  <b>ICAO Code</b>
                </td>
                <td>{airportData.icao_code}</td>
              </tr>
              <tr>
                <td>
                  <b>Phone Number</b>
                </td>
                <td>{airportData.phone}</td>
              </tr>
              <tr>
                <td>
                  <b>Address</b>
                </td>
                <td>{airportData.address}</td>
              </tr>
              <tr>
                <td>
                  <b>Zip Code</b>
                </td>
                <td>{airportData.zip_code}</td>
              </tr>
              <tr>
                <td>
                  <b>Latitude</b>
                </td>
                <td>{airportData.latitude}</td>
              </tr>
              <tr>
                <td>
                  <b>Longtitude</b>
                </td>
                <td>{airportData.longitude}</td>
              </tr>
            </tbody>
          </Table>
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
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAa0pVSA26KxyWPdzXupgd8-OTjlsq_Rvc&q=${airportData.name}`}
          ></iframe>
        </Container>


        <Container className="my-5">
          <Row>
            <Col>
              <Card>
                <Card.Header as="h5">Nearest Cities</Card.Header>
                <Card.Body>
                  <Container className="my-3">
                    <Button variant="primary">{airportData.nearest_cities[0].name}</Button>
                  </Container>
                  <Container className="my-3">
                    <Button variant="primary">{airportData.nearest_cities[1].name}</Button>
                  </Container>
                  <Container className="my-3">
                    <Button variant="primary">{airportData.nearest_cities[2].name}</Button>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header as="h5">Nearest Parks</Card.Header>
                <Card.Body>
                <Container className="my-3">
                    <Button variant="primary">{airportData.nearest_parks[0].name}</Button>
                  </Container>
                  <Container className="my-3">
                    <Button variant="primary">{airportData.nearest_parks[1].name}</Button>
                  </Container>
                  <Container className="my-3">
                    <Button variant="primary">{airportData.nearest_parks[2].name}</Button>
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

export default AirportsInstances;