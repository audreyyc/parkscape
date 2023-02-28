import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from './navbar';
import DeveloperCard from './developercard';
import { DeveloperInfo } from './developerinfo.js';
import ToolCard from './toolcard';
import { ToolsInfo } from './toolsinfo';
import { APIInfo } from './apiinfo';

import 'bootstrap/dist/css/bootstrap.css';

function AboutPage() {
  return (
    <>
      {/* Navbar */}
      <NavBar></NavBar>

      {/* Description */}
      <Container class="container text-center mt-5 mb-4">
        <h1>About ParkScape</h1>
      </Container>
      <Container class="container text-left mt-5 mb-4">
        <p>
          ParkScape compiles information about United States airports, nearby
          cities, and their local state/national parks -- helping travelers who
          are visiting specific cities or parks to find other nearby locations 
          of interest (specifically nearby cities, parks, and airports).
        </p>
        <p>
          Our purpose is to help travellers make more educated decisions about
          their trips while encouraging them to experience the beautiful parks and cities of the US.
        </p>
      </Container>

      {/* Developer Cards */}
      <Container class="container text-center mt-5 mb-4">
        <h1>Our Team</h1>
      </Container>
      <Container class="container text-center mt-5 mb-4">
        <Row class="row row-cols-md-5 g-4">
        {DeveloperInfo.map((member) => {
          return (
            <Col class="col">
              <DeveloperCard {...member}></DeveloperCard>
            </Col>
          )
        })}
        </Row>
      </Container>

      {/* Repository Data */}
      <Container class="container text-center mt-5 mb-4">
        <h2>Total GitLab Statistics</h2>
      </Container>
      <Container class="container text-center mt-5 mb-4">
        <Card>
          <Card.Body>
            <Card.Subtitle>Total Commits: {}</Card.Subtitle>
            <br></br>
            <Card.Subtitle>Total Issues: {}</Card.Subtitle>
            <br></br>
            <Card.Subtitle>Total Unit Tests: {}</Card.Subtitle>
          </Card.Body>
        </Card>
      </Container>

      {/* Tools Cards */}
      <Container class="container text-center mt-5 mb-4">
        <h1>Tools</h1>
      </Container>
      <Container class="container text-center mt-5 mb-4">
        <Row class="row row-cols-md-4 g-3">
        {ToolsInfo.slice(0,4).map((tool) => {
          return (
            <Col class="col">
              <ToolCard {...tool}></ToolCard>
            </Col>
          )
        })}
        </Row>
        <br></br>
        <Row class="row row-cols-md-4 g-3">
        {ToolsInfo.slice(4).map((tool) => {
          return (
            <Col class="col">
              <ToolCard {...tool}></ToolCard>
            </Col>
          )
        })}
        </Row>
      </Container>

      {/* API Cards */}
      <Container class="container text-center mt-5 mb-4">
        <h1>APIs</h1>
      </Container>
      <Container class="container text-center mt-5 mb-4">
        <Row class="row row-cols-md-5 g-3">
        {APIInfo.map((api) => {
          return (
            <Col class="col">
              <ToolCard {...api}></ToolCard>
            </Col>
          )
        })}
        </Row>
      </Container>
      <Container class="container text-center mt-5 mb-5">
        <a href="https://documenter.getpostman.com/view/25781480/2s935uGgU4"><Button variant="dark">Our API</Button></a>
      </Container>
    </>
  );
}

export default AboutPage;