import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./home.css";

function HomePage() {
  return (
    <>
      {/* Photo and Title */}
      <div class="bg-image">
        <h1 class="bg-text">Welcome to ParkScape!</h1>
      </div>

      {/* Cards */}
      <Container className="container text-center mt-5 mb-4">
        <h2>Explore</h2>
      </Container>

      <Container className="container text-center mt-5 mb-5">
        <Row className="row row-cols-md-3 g-4">
          <Col className="col">
            <Card>
              <Card.Body>
                <Card.Title>Parks</Card.Title>
                <Card.Text>
                  Visit some of the most beautiful landscapes the United States
                  has to offer.
                </Card.Text>
                <Link to={`/parks`}
                      className="link-card d-flex align-items-stretch">
                  <Button variant="primary"> Search parks </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col">
            <Card>
              <Card.Body>
                <Card.Title>Airports</Card.Title>
                <Card.Text>
                  Find the best airports to suit your transportation needs,
                  wherever you plan your vacation.
                </Card.Text>
                <Link to={`/airports`}
                      className="link-card d-flex align-items-stretch">
                  <Button variant="primary"> Search airports </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col">
            <Card>
              <Card.Body>
                <Card.Title>Cities</Card.Title>
                <Card.Text>
                  Discover great cities and travel across the United States
                  according to your preferences.
                </Card.Text>
                <Link to={`/cities`}
                      className="link-card d-flex align-items-stretch">
                  <Button variant="primary"> Search cities </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
