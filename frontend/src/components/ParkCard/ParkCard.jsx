import React from "react";
import "./ParkCard.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ParkCard = ({ title, imageSrc, operatingHours, phone, email }) => {
  return (
    <Container className="col col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
      <Card className="ms-auto me-auto mb-3 mt-3" style={{ width: "95%" }}>
        <Card.Img
          variant="top"
          src={imageSrc}
          style={{ width: "100%", height: "240px" }}
        />
        <Card.Body style={{ textAlign: "left" }}>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="mt-3">
            Operating Hours:
            <br />
            <OperatingHours operatingHours={operatingHours} />
            <br />
            Phone: {phone}
            <br />
            Email: {email}
            <br />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex flex-column">
          <Button variant="primary">Learn More</Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

function OperatingHours({ operatingHours }) {
  var weekdays = [1, 1, 1, 1, 1, 1, 1];

  for (var i = 0; i < operatingHours.length; i++) {
    if (operatingHours[i] === "Closed") {
      weekdays[i] = 0;
    }
  }

  return (
    <div style={{ marginTop: "10px" }}>
      <div
        class={
          weekdays[0]
            ? "operatingHoursDayBoxOpen me-1"
            : "operatingHoursDayBoxClosed me-1"
        }
      >
        Mo
      </div>
      <div
        class={
          weekdays[1]
            ? "operatingHoursDayBoxOpen me-1"
            : "operatingHoursDayBoxClosed me-1"
        }
      >
        Tu
      </div>
      <div
        class={
          weekdays[2]
            ? "operatingHoursDayBoxOpen me-1"
            : "operatingHoursDayBoxClosed me-1"
        }
      >
        We
      </div>
      <div
        class={
          weekdays[3]
            ? "operatingHoursDayBoxOpen me-1"
            : "operatingHoursDayBoxClosed me-1"
        }
      >
        Th
      </div>
      <div
        class={
          weekdays[4]
            ? "operatingHoursDayBoxOpen me-1"
            : "operatingHoursDayBoxClosed me-1"
        }
      >
        Fr
      </div>
      <div
        class={
          weekdays[5]
            ? "operatingHoursDayBoxOpen me-1"
            : "operatingHoursDayBoxClosed me-1"
        }
      >
        Sa
      </div>
      <div
        class={
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
