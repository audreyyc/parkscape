import React from "react";
import Container from "react-bootstrap/esm/Container";
import TopAirportStates from "../../components/Visualizations/TopAirportStates";
import CampgroundFees from "../../components/Visualizations/CampgroundFees";
import AverageSafetyStates from "../../components/Visualizations/AverageSafetyStates";
import TrailDurations from "../../components/Visualizations/TrailDurations";
import ParksEntranceFees from "../../components/Visualizations/ParkEntranceFees";
import ParksByFees from "../../components/Visualizations/ParksByFees";

const Visualizations = () => {
  return (
    <>
      <Container className="d-flex justify-content-center flex-column">
        <Container className="container text-center mt-5 mb-4">
          <h1>Visualizations!</h1>
          <Container className="container text-center mt-3 mb-4">
            <h2>
              <i>ParkScape</i>
            </h2>
            <ParksEntranceFees />
            <TopAirportStates />
            <AverageSafetyStates />
          </Container>
          <Container className="container text-center mt-5 mb-5"></Container>
          <i>
            <h2>Re-Park-Able</h2>
          </i>
          <h6>(Our Developer)</h6>
          <ParksByFees />
          <CampgroundFees />
          <TrailDurations />
        </Container>
      </Container>
    </>
  );
};

export default Visualizations;
