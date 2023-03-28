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

import "bootstrap/dist/css/bootstrap.css";

function ParkInstance() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const parkId = useParams().id;

  const style = {
    thumb: {
      height: "100%",
      objectFit: "cover",
    },
  };

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.parkscape.me/park/${parkId}`).then((res) => {
      setData(res.data.data);
    });
  }, [parkId]);

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
            <Container className="container text-start mt-5">
              {/* Title and Desc. */}
              <Row>
                <h1>{data.name}</h1>
                <br></br>
                <p>{data.description}</p>
              </Row>

              {/* Images */}
              <Row>
                {data.photos.map((img) => {
                  return (
                    <Col>
                      <Image
                        src={img}
                        className="img-thumbnail"
                        style={style.thumb}
                      ></Image>
                    </Col>
                  );
                })}
              </Row>

              {/* Information */}
              <Row>
                {/* Activities */}
                <Container className="col-md-4 col-sm-12 mt-4">
                  <Card>
                    <Card.Header>
                      <h5>Activities</h5>
                    </Card.Header>
                    <Card.Body>
                      <ul>
                        {data.activities.map((item) => {
                          return <li>{item}</li>;
                        })}
                      </ul>
                    </Card.Body>
                  </Card>
                </Container>

                {/* Topics */}
                <Container className="col-md-4 col-sm-12 mt-4">
                  <Card>
                    <Card.Header>
                      <h5>Topics</h5>
                    </Card.Header>
                    <Card.Body>
                      <ul>
                        {data.topics.map((item) => {
                          return <li>{item}</li>;
                        })}
                      </ul>
                    </Card.Body>
                  </Card>
                </Container>

                {/* Topics */}
                <Container className="col-md-4 col-sm-12 mt-4">
                  <Table className="table table-hover table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Day</th>
                        <th scope="col">Hours</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Monday</th>
                        <td>{data.weekdays[0]}</td>
                      </tr>
                      <tr>
                        <th scope="row">Tuesday</th>
                        <td>{data.weekdays[1]}</td>
                      </tr>
                      <tr>
                        <th scope="row">Wednesday</th>
                        <td>{data.weekdays[2]}</td>
                      </tr>
                      <tr>
                        <th scope="row">Thursday</th>
                        <td>{data.weekdays[3]}</td>
                      </tr>
                      <tr>
                        <th scope="row">Friday</th>
                        <td>{data.weekdays[4]}</td>
                      </tr>
                      <tr>
                        <th scope="row">Saturday</th>
                        <td>{data.weekdays[5]}</td>
                      </tr>
                      <tr>
                        <th scope="row">Sunday</th>
                        <td>{data.weekdays[6]}</td>
                      </tr>
                    </tbody>
                  </Table>

                  {/* Fees */}
                  <Table className="table table-hover table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>${Number(data.fee).toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Container>
              </Row>

              {/* Map */}
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

              {/* Links to Pages */}
              <Container className="text-center my-5">
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
                </Row>
              </Container>

              {/* Contact Information */}
              <Row>
                <Col>
                  <Card className="card mb-5">
                    <Card.Header>
                      <h5>Contact Information</h5>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <b>Phone: </b>
                        {data.phone}
                      </Card.Text>
                      <Card.Text>
                        <b>Email: </b>
                        {data.email}
                      </Card.Text>
                      <Card.Text>
                        <b>Website: </b>
                        <a href={data.website}>{data.website}</a>
                      </Card.Text>
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

export default ParkInstance;
