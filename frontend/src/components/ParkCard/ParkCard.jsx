import React from "react";
import "./ParkCard.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

const ParkCard = ({
  title,
  imageSrc,
  operatingHours,
  phone,
  email,
  parkId,
  search,
}) => {
  function highlightSearch(text) {
    if (search != null) {
      return (
        <Highlighter
          searchWords={search.split(" ")}
          autoEscape={true}
          textToHighlight={text}
        />
      );
    }
    return text;
  }

  return (
    <Container
      data-testid="park-card"
      className="col col-sm-12 col-md-6 col-lg-6 col-xl-4 d-flex align-items-stretch"
    >
      <Card className="park-card ms-auto me-auto mb-4 mt-4">
        <Link
          to={`/parks/${parkId}`}
          id={parkId}
          className="link-card d-flex align-items-stretch"
        >
          <Card.Img
            variant="top"
            src={imageSrc}
            style={{ width: "100%", height: "240px" }}
          />
          <Card.Body style={{ textAlign: "left" }}>
            <Card.Title>{highlightSearch(title)}</Card.Title>
            <Card.Text className="mt-3">
              Operating Hours:
              <br />
              <OperatingHours operatingHours={operatingHours} />
              <br />
              Phone: {highlightSearch(phone)}
              <br />
              Email: {highlightSearch(email)}
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

function OperatingHours({ operatingHours }) {
  var weekdays = [1, 1, 1, 1, 1, 1, 1];

  if (operatingHours) {
    for (var i = 0; i < operatingHours.length; i++) {
      if (operatingHours[i] === "Closed") {
        weekdays[i] = 0;
      }
    }
  }

  return (
    <div className="weekdays">
      <div
        className={
          weekdays[0]
            ? "operatingHoursDayBoxOpen me-1"
            : "operatingHoursDayBoxClosed me-1"
        }
      >
        Mo
      </div>
      <div
        className={
          weekdays[1]
            ? "operatingHoursDayBoxOpen me-1"
            : "operatingHoursDayBoxClosed me-1"
        }
      >
        Tu
      </div>
      <div
        className={
          weekdays[2]
            ? "operatingHoursDayBoxOpen me-1"
            : "operatingHoursDayBoxClosed me-1"
        }
      >
        We
      </div>
      <div
        className={
          weekdays[3]
            ? "operatingHoursDayBoxOpen me-1"
            : "operatingHoursDayBoxClosed me-1"
        }
      >
        Th
      </div>
      <div
        className={
          weekdays[4]
            ? "operatingHoursDayBoxOpen me-1"
            : "operatingHoursDayBoxClosed me-1"
        }
      >
        Fr
      </div>
      <div
        className={
          weekdays[5]
            ? "operatingHoursDayBoxOpen me-1"
            : "operatingHoursDayBoxClosed me-1"
        }
      >
        Sa
      </div>
      <div
        className={
          weekdays[6]
            ? "operatingHoursDayBoxOpen me-1"
            : "operatingHoursDayBoxClosed me-1"
        }
      >
        Su
      </div>
    </div>
  );
}

export default ParkCard;
