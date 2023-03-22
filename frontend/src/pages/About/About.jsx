import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DeveloperCard from "../../components/DeveloperCard/DeveloperCard.jsx";
import { DeveloperInfo } from "./static-data/developer_info.js";
import ToolCard from "../../components/ToolCard/ToolCard.jsx";
import { ToolsInfo } from "./static-data/tools_info";
import { APIInfo } from "./static-data/api_info";

import "bootstrap/dist/css/bootstrap.css";

function AboutPage() {
  //* GitLab API calls *//
  const [totalCommits, setTotalCommits] = useState([]);
  const [totalIssues, setTotalIssues] = useState([]);

  // Get commits per user
  async function get_commits() {
<<<<<<< HEAD
=======
    var numCommits = 0;
>>>>>>> 977cd985ee8c557e9986c6fa89c3174470d50e18
    var request = new XMLHttpRequest();
    var url =
      "https://gitlab.com/api/v4/projects/43345825/repository/contributors/";
    request.open("GET", url);
    request.onload = function () {
      var result = JSON.parse(this.response);
      result.forEach((data) => {
        DeveloperInfo.forEach((user) => {
          if (data.name === user.name) {
            user.commits = data.commits;
<<<<<<< HEAD
          }
        });
      });
=======
            numCommits += data.commits;
          }
        });
      });
      setTotalCommits(numCommits);
>>>>>>> 977cd985ee8c557e9986c6fa89c3174470d50e18
    };
    request.send();
  }

  // Get issues per user
  async function get_issues() {
    DeveloperInfo.forEach((user) => {
      var request = new XMLHttpRequest();
      var url =
        "https://gitlab.com/api/v4/projects/43345825/issues_statistics?author_id=".concat(
          user.user_id
        );
      request.open("GET", url);
      request.onload = function () {
        var result = JSON.parse(this.response);
        var num = result.statistics.counts.all;
        user.issues = num;
      };
      request.send();
    });
  }

<<<<<<< HEAD
  // Get total commits
  async function total_commits() {
    var request = new XMLHttpRequest();
    var url =
      "https://gitlab.com/api/v4/projects/43345825/repository/commits/?per_page=1000";
    request.open("GET", url);
    request.onload = function () {
      var result = JSON.parse(this.response);
      var num = result.length;
      setTotalCommits(num);
    };
    request.send();
  }

=======
>>>>>>> 977cd985ee8c557e9986c6fa89c3174470d50e18
  // Get total issues
  async function total_issues() {
    var request = new XMLHttpRequest();
    var url = "https://gitlab.com/api/v4/projects/43345825/issues_statistics";
    request.open("GET", url);
    request.onload = function () {
      var result = JSON.parse(this.response);
      var num = result.statistics.counts.all;
      setTotalIssues(num);
    };
    request.send();
  }

  // Get total unit tests
  function total_unittests() {
    var total = 0;
    DeveloperInfo.forEach((user) => {
      total += user.unittests;
    });
    return total;
  }

  useEffect(() => {
    get_commits();
    get_issues();
<<<<<<< HEAD
    total_commits();
=======
    // total_commits();
>>>>>>> 977cd985ee8c557e9986c6fa89c3174470d50e18
    total_issues();
  }, []);

  return (
    <>
      {/* Description */}
      <Container className="container text-center mt-5 mb-4">
        <h1>About ParkScape</h1>
      </Container>
      <Container className="container text-start mt-5 mb-4">
        <p>
          ParkScape compiles information about United States airports, nearby
          cities, and their local state/national parks -- helping travelers who
          are visiting specific cities or parks to find other nearby locations
          of interest (specifically nearby cities, parks, and airports).
        </p>
        <p>
          Our purpose is to help travellers make more educated decisions about
          their trips while encouraging them to experience the beautiful parks
          and cities of the US.
        </p>
      </Container>

      {/* Developer Cards */}
      <Container className="container text-center mt-5 mb-4">
        <h1>Our Team</h1>
      </Container>
      <Container className="container text-start mt-5 mb-4">
        <Row className="row row-cols-md-5 g-4">
          {DeveloperInfo.map((user) => {
            return (
              <Col key={user.name} className="col">
                <DeveloperCard {...user}></DeveloperCard>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Repository Data */}
      <Container className="container text-center mt-5 mb-4">
        <h2>Total GitLab Statistics</h2>
      </Container>
      <Container className="container text-center mt-5 mb-4">
        <Card>
          <Card.Body>
            <Card.Subtitle as="h5">Total Commits: {totalCommits}</Card.Subtitle>
            <br></br>
            <Card.Subtitle as="h5">Total Issues: {totalIssues}</Card.Subtitle>
            <br></br>
            <Card.Subtitle as="h5">
              Total Unit Tests: {total_unittests()}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Container>

      {/* Tools Cards */}
      <Container className="container text-center mt-5 mb-4">
        <h1>Tools</h1>
      </Container>
      <Container className="container text-center mt-5 mb-4">
<<<<<<< HEAD
        <Row className="row row-cols-md-5 g-3">
          {ToolsInfo.map((tool) => {
=======
        <Row className="row row-cols-md-4 g-3">
          {ToolsInfo.slice(0, 4).map((tool) => {
            return (
              <Col className="col">
                <ToolCard {...tool}></ToolCard>
              </Col>
            );
          })}
        </Row>
        <br></br>
        <Row className="row row-cols-md-4 g-3">
          {ToolsInfo.slice(4).map((tool) => {
>>>>>>> 977cd985ee8c557e9986c6fa89c3174470d50e18
            return (
              <Col key={tool.name} className="col">
                <ToolCard {...tool}></ToolCard>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* API Cards */}
      <Container className="container text-center mt-5 mb-4">
        <h1>APIs</h1>
      </Container>
      <Container className="container text-center mt-5 mb-4">
        <Row className="row row-cols-md-5 g-3">
          {APIInfo.map((api) => {
            return (
              <Col key={api.name} className="col">
                <ToolCard {...api}></ToolCard>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container className="container text-center mt-5 mb-5">
        <a href="https://documenter.getpostman.com/view/25781480/2s935uGgU4">
          <Button variant="dark">Our API</Button>
        </a>
      </Container>
    </>
  );
}

export default AboutPage;
