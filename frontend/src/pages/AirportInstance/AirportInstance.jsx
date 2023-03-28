// Code for Layout derived from React Bootstrap Documentation
// Code to retrieve data derived from https://gitlab.com/danbotMBM/cs373-idb-11-5/-/blob/main/front-end/src/pages/Countries/CountryInstance.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { Spinner } from "react-bootstrap";

function AirportInstance() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const airportId = useParams().id;

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.parkscape.me/airport/${airportId}`).then((res) => {
      setData(res.data.data);
      console.log(res);
    });
  }, [airportId]);

  useEffect(() => {
    if (data) setLoading(false);
  }, [data]);

  return (
    <>
      <Container className="container text-center mt-5">
        {loading ? (
          <Container className="d-flex justify-content-center">
            <Spinner className="ms-3" animation="border" />
          </Container>
        ) : (
          <>
            <Container className="mt-5">
              <h1>{data.iata_code}</h1>
              <h2>{data.name}</h2>
              <h4>
                {data.city}, {data.state}
              </h4>
            </Container>

            <Container className="d-flex mt-5 justify-content-center">
              <Button href={data.website} variant="outline-primary" size="lg">
                Website
              </Button>
            </Container>

            <Container className="d-flex justify-content-center mt-4">
              <Table className="table fs-5" striped>
                <tbody>
                  <tr>
                    <td>
                      <b>ICAO Code</b>
                    </td>
                    <td>{data.icao_code}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Phone Number</b>
                    </td>
                    <td>{data.phone}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Address</b>
                    </td>
                    <td>{data.address}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Zip Code</b>
                    </td>
                    <td>{data.zip_code}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Latitude</b>
                    </td>
                    <td>{data.latitude}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Longtitude</b>
                    </td>
                    <td>{data.longitude}</td>
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
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAa0pVSA26KxyWPdzXupgd8-OTjlsq_Rvc&q=${data.name}`}
              ></iframe>
            </Container>

            <Container className="my-5">
              <Row>
                <Col>
                  <Card>
                    <Card.Header as="h5">Nearest Cities</Card.Header>
                    <Card.Body>
                      <Container className="my-3">
                        <Link
                          to={`/cities/${data.nearest_cities[0].id + 1}`}
                          id={data.nearest_cities[0].id + 1}
                          className="link-card d-flex align-items-stretch"
                        >
                          <Button variant="primary">
                            {data.nearest_cities[0].name}
                          </Button>
                        </Link>
                      </Container>
                      <Container className="my-3">
                        <Link
                          to={`/cities/${data.nearest_cities[1].id + 1}`}
                          id={data.nearest_cities[1].id + 1}
                          className="link-card d-flex align-items-stretch"
                        >
                          <Button variant="primary">
                            {data.nearest_cities[1].name}
                          </Button>
                        </Link>
                      </Container>
                      <Container className="my-3">
                        <Link
                          to={`/cities/${data.nearest_cities[2].id + 1}`}
                          id={data.nearest_cities[2].id + 1}
                          className="link-card d-flex align-items-stretch"
                        >
                          <Button variant="primary">
                            {data.nearest_cities[2].name}
                          </Button>
                        </Link>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Header as="h5">Nearest Parks</Card.Header>
                    <Card.Body>
                      <Container className="my-3">
                        <Link
                          to={`/parks/${data.nearest_parks[0].id + 1}`}
                          id={data.nearest_parks[0].id + 1}
                          className="link-card d-flex align-items-stretch"
                        >
                          <Button variant="primary">
                            {data.nearest_parks[0].name}
                          </Button>
                        </Link>
                      </Container>
                      <Container className="my-3">
                        <Link
                          to={`/parks/${data.nearest_parks[1].id + 1}`}
                          id={data.nearest_parks[1].id + 1}
                          className="link-card d-flex align-items-stretch"
                        >
                          <Button variant="primary">
                            {data.nearest_parks[1].name}
                          </Button>
                        </Link>
                      </Container>
                      <Container className="my-3">
                        <Link
                          to={`/parks/${data.nearest_parks[2].id + 1}`}
                          id={data.nearest_parks[2].id + 1}
                          className="link-card d-flex align-items-stretch"
                        >
                          <Button variant="primary">
                            {data.nearest_parks[2].name}
                          </Button>
                        </Link>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </Container>
    </>
  );
}

export default AirportInstance;
