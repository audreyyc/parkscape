import React from "react";
import Container from "react-bootstrap/esm/Container";
import TopAirportStates from "../../components/Visualizations/TopAirportStates";

const Visualizations = () => {
    return (
        <>
        <Container className="d-flex justify-content-center flex-column">
            <Container className="container text-center mt-5 mb-4">
                <h1>Visualizations!</h1>
            </Container>
        </Container>
        <TopAirportStates />
        </>
    );
}

export default Visualizations;