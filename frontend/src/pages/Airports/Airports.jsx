import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import airports_json from "./airports.json";
import AirportCard from "../../components/AirportCard/AirportCard";
import Pagination from "../../components/Pagination/Pagination";

const Airports = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 18;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = airports_json.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Container className="container text-center mt-5 mb-4">
        <h1>Airports!</h1>
        <p style={{ fontSize: "20px", color: "darkgray" }}>
          {airports_json.length}
        </p>
      </Container>

      <Container>
        <form
          className="d-flex mx-auto mt-5 mb-4"
          role="search"
          style={{ width: "50%" }}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        <div className="row mx-auto" style={{ width: "80%" }}>
          <div className="col">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              defaultValue={"0"}
            >
              <option value="0">Sort</option>
              <option value="1">Name (A-Z)</option>
              <option value="2">Name (Z-A)</option>
              <option value="3">State (A-Z)</option>
              <option value="3">State (Z-A)</option>
              <option value="3">Rating (High to Low)</option>
              <option value="3">Rating (Low to High)</option>
            </select>
          </div>
          <div className="col">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              defaultValue={"0"}
            >
              <option value="0">Budget</option>
              <option value="1">Very High</option>
              <option value="2">High</option>
              <option value="3">Medium High</option>
              <option value="3">Medium</option>
            </select>
          </div>
          <div className="col">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              defaultValue={"0"}
            >
              <option value="0">Safety</option>
              <option value="1">Very High</option>
              <option value="2">High</option>
              <option value="3">Medium</option>
            </select>
          </div>
          <div className="col">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              defaultValue={"0"}
            >
              <option value="0">State</option>
              <option value="1">TX</option>
              <option value="2">CO</option>
              <option value="3">NV</option>
            </select>
          </div>
        </div>

        <div className="text-center mt-3 mb-5">
          <button className="btn btn-large btn-success btn-lg" type="apply">
            Apply
          </button>
        </div>
      </Container>

      <Container className="px-4">
        <Container className="row gx-3">
          {currentCards.map((airport, index) => (
            <AirportCard
              name={airport.name}
              iata={airport.iata_code}
              location={`${airport.city}, ${airport.state}`}
              website={<a href={airport.website}>{airport.website}</a>}
              phone={airport.phone}
              airportId={airport.id}
              key={airport.id}
            />
          ))}
        </Container>
      </Container>

      <Pagination
        currentPage={currentPage}
        cardsPerPage={cardsPerPage}
        totalCards={airports_json.length}
        paginate={paginate}
      />
    </>
  );
};

export default Airports;
