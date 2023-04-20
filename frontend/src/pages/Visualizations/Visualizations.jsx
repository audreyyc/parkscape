import React from "react";
import Container from "react-bootstrap/esm/Container";
import TopAirportStates from "../../components/Visualizations/TopAirportStates";
import AverageSafetyStates from "../../components/Visualizations/AverageSafetyStates";
import ParksEntranceFees from "../../components/Visualizations/ParkEntranceFees";

const Visualizations = () => {
  return (
    <>
      <Container className="d-flex justify-content-center flex-column">
        <Container className="container text-center mt-5 mb-4">
          <h1>Our Visualizations!</h1>
          <h4>Park Scapes</h4>
          <Container className="container text-center mt-3 mb-4">
            <ParksEntranceFees />
            <TopAirportStates />
            <AverageSafetyStates />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Visualizations;
