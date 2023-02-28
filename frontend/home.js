import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import NavBar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css';

function HomePage() {
  return (
    <>
      {/* Navbar */}
      <NavBar></NavBar>

      {/* Photo and Title */}
      <div class="bg-image">
        <h1 class="bg-text">Welcome to ParkScape!</h1>
      </div>

      {/* Cards */}
      <Container class="container text-center mt-5 mb-4">
        <h2>Explore</h2>
      </Container>

      <Container class="container text-center mt-5 mb-5">
        <Row class="row row-cols-md-3 g-4">
          <Col class="col">
            <Card>
              <Card.Body>
                <Card.Title>Parks</Card.Title>
                <Card.Text>Visit some of the most beautiful landscapes the United States has to offer.</Card.Text>
                <Button variant="primary" href="#parks">Search parks</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col class="col">
            <Card>
              <Card.Body>
                <Card.Title>Airports</Card.Title>
                <Card.Text>Find the best airports to suit your transportation needs, wherever you plan your vacation.</Card.Text>
                <Button variant="primary" href="#airports">Search airports</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col class="col">
            <Card>
              <Card.Body>
                <Card.Title>Cities</Card.Title>
                <Card.Text>Discover great cities and travel across the United States according to your preferences.</Card.Text>
                <Button variant="primary" href="#cities">Search cities</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;