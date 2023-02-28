import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStar2 } from "@fortawesome/free-regular-svg-icons";
import Rating from "react-rating";
import "./CityCard.css";

const CityCard = ({
  name,
  imageSrc,
  population,
  budget,
  safety,
  rating,
  cityId,
}) => {
  return (
    <Container className="col col-sm-12 col-md-6 col-lg-6 col-xl-4 d-flex align-items-stretch">
      <Card className="city-card ms-auto me-auto mb-4 mt-4">
        <Link
          to={`/cities/${cityId}`}
          id={cityId}
          className="link-card d-flex align-items-stretch"
        >
          <Card.Img
            variant="top"
            src={imageSrc}
            style={{ width: "100%", height: "240px" }}
          />
          <Card.Body style={{ textAlign: "left" }}>
            <Card.Title>{name}</Card.Title>
            <Card.Text style={{ lineHeight: "27px" }} className="mt-3">
              Rating:{" "}
              <Rating
                initialRating={rating}
                readonly
                emptySymbol={
                  <FontAwesomeIcon
                    size="lg"
                    style={{ color: "#d9a516" }}
                    icon={faStar2}
                  />
                }
                fullSymbol={
                  <FontAwesomeIcon
                    size="lg"
                    style={{ color: "#d9a516" }}
                    icon={faStar}
                  />
                }
              />
              <br />
              Population:{" "}
              {population
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              <br />
              Budget: {budget}
              <br />
              Safety: {safety}
              <br />
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex flex-column">
            <Button variant="primary">Learn More</Button>
          </Card.Footer>
        </Link>
      </Card>
    </Container>
  );
};

export default CityCard;
