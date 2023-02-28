import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./AirportCard.css";

const AirportCard = ({ name, iata, location, website, phone, airportId }) => {
  return (
    <Container className="col col-sm-12 col-md-6 col-lg-6 col-xl-4 d-flex align-items-stretch">
      <Card className="airport-card ms-auto me-auto mb-4 mt-4">
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{name}</Card.Title>
          <Card.Text style={{ lineHeight: "27px" }} className="mt-3">
            Location: {location}
            <br />
            IATA: {iata}
            <br />
            Phone: {phone}
            <br />
            Website: {website}
            <br />
          </Card.Text>
        </Card.Body>

        <Card.Footer className="d-flex flex-column">
          <Link
            to={`/airports/${airportId}`}
            id={airportId}
            className="link-card d-flex align-items-stretch"
          >
            <Button variant="primary">Learn More</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default AirportCard;
