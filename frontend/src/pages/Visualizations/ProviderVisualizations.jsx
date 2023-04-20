import React from "react";
import Container from "react-bootstrap/esm/Container";
import CampgroundFees from "../../components/Visualizations/CampgroundFees";
import TrailDurations from "../../components/Visualizations/TrailDurations";
import ParksByFees from "../../components/Visualizations/ParksByFees";

const ProviderVisualizations = () => {
    return (
      <>
        <Container className="d-flex justify-content-center flex-column">
          <Container className="container text-center mt-5 mb-4">
            <h1>Provider Visualizations!</h1>
            <h4>Re-Park-Able</h4>
            <Container className="container text-center mt-3 mb-4">
              <ParksByFees />
              <CampgroundFees />
              <TrailDurations />
            </Container>
          </Container>
        </Container>
      </>
    );
  };
  
  export default ProviderVisualizations;