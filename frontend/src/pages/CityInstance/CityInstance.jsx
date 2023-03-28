// Code for Layout derived from React Bootstrap Documentation
// Code to retrieve data derived from https://gitlab.com/danbotMBM/cs373-idb-11-5/-/blob/main/front-end/src/pages/Countries/CountryInstance.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { Spinner } from "react-bootstrap";

function CityInstance() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const cityId = useParams().id;

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.parkscape.me/city/${cityId}`).then((res) => {
      setData(res.data.data);
    });
  }, [cityId]);

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
              <h1>{data.name}</h1>
              <h3>{data.state}</h3>
              <h4>
                {data.latitude}, {data.longitude}
              </h4>
            </Container>

            <Image
              src={data.photo}
              className="img-fluid mt-5"
              alt={data.name}
            ></Image>

            <Container className="d-flex justify-content-center mt-4">
              <Table className="table fs-5" striped>
                <tbody>
                  <tr>
                    <td>
                      <b>Population</b>
                    </td>
                    <td>{data.population}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Travel Cost</b>
                    </td>
                    <td>{data.cost}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Safety</b>
                    </td>
                    <td>{data.safety}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Average Rating</b>
                    </td>
                    <td>{data.rating}</td>
                  </tr>
                </tbody>
              </Table>
            </Container>

            <Container className="d-flex mt-5 justify-content-center">
              <Container className="list-group-item border-0">
                <Button
                  href={data.airbnb_listings}
                  variant="outline-primary"
                  size="lg"
                >
                  AirBnB Listings
                </Button>
              </Container>
              <Container className="list-group-item border-0">
                <Button
                  href={data.walkability}
                  variant="outline-primary"
                  size="lg"
                >
                  City Walkability Score
                </Button>
              </Container>
              <Container className="list-group-item border-0">
                <Button
                  href={data.hiking_trails}
                  variant="outline-primary"
                  size="lg"
                >
                  Hiking Trails
                </Button>
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
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAa0pVSA26KxyWPdzXupgd8-OTjlsq_Rvc&q=${data.name}`}
              ></iframe>
            </Container>

            <Container className="my-5">
              <Row>
                <Col>
                  <Card>
                    <Card.Header as="h5">Nearest Airports</Card.Header>
                    <Card.Body>
                      <Container className="my-3">
                        <Link
                          to={`/airports/${data.nearest_airports[0].id + 1}`}
                          id={data.nearest_airports[0].id + 1}
                          className="link-card d-flex align-items-stretch"
                        >
                          <Button variant="primary">
                            {data.nearest_airports[0].name}
                          </Button>
                        </Link>
                      </Container>
                      <Container className="my-3">
                        <Link
                          to={`/airports/${data.nearest_airports[1].id + 1}`}
                          id={data.nearest_airports[1].id + 1}
                          className="link-card d-flex align-items-stretch"
                        >
                          <Button variant="primary">
                            {data.nearest_airports[1].name}
                          </Button>
                        </Link>
                      </Container>
                      <Container className="my-3">
                        <Link
                          to={`/airports/${data.nearest_airports[2].id + 1}`}
                          id={data.nearest_airports[2].id + 1}
                          className="link-card d-flex align-items-stretch"
                        >
                          <Button variant="primary">
                            {data.nearest_airports[2].name}
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

export default CityInstance;
