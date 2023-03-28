import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import AirportCard from "../../components/AirportCard/AirportCard";
import Pagination from "../../components/Pagination/Pagination";
import { Spinner } from "react-bootstrap";

const Airports = ({ searchInput, showFilters }) => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalInstances, setTotalInstances] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchInput);

  function api() {
    let searchURI = search ? `&search=${encodeURI(search)}` : "";

    let size_url = `https://api.parkscape.me/airports?${searchURI}`;
    let url = `https://api.parkscape.me/airports?page=${currentPage}${searchURI}`;

    axios.get(size_url).then((res) => {
      setTotalInstances(res.data.count);
    });

    axios.get(url).then((res) => {
      setData(res.data.data);
    });
  }

  useEffect(() => {
    if (searchInput) {
      setSearch(searchInput);
    }
  }, [searchInput]);

  useEffect(() => {
    if (search) {
      setLoading(true);
      api();
      setCurrentPage(1);
    }
  }, [search]);

  useEffect(() => {
    setLoading(true);
    api();
  }, [currentPage]);

  useEffect(() => {
    if (data) setLoading(false);
  }, [data]);

  const cardsPerPage = 12;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="d-flex justify-content-center flex-column">
      <Container className="container text-center mt-5 mb-4">
        <h1>Airports!</h1>
        <p style={{ fontSize: "20px", color: "darkgray" }}>
          {!loading ? totalInstances : "---"}
        </p>
      </Container>

      {showFilters && <Container>
        <form
          className="d-flex mx-auto mt-5 mb-4"
          role="search"
          style={{ width: "50%" }}
          onSubmit={(e) => {
            e.preventDefault();
            var searchedTerm = document.getElementById("airportsSearch").value;
            if (!searchedTerm) {
              searchedTerm = " ";
            }
            setSearch(searchedTerm);
          }}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="airportsSearch"
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
            </select>
          </div>
          <div className="col">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              defaultValue={"0"}
            >
              <option value="0">Phone</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
          <div className="col">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              defaultValue={"0"}
            >
              <option value="0">Website</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
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
      </Container> }

      <Container className="px-4">
        <Container className="row gx-3">
          {!loading ? (
            data.map((airport, index) => (
              <AirportCard
                name={airport.name}
                iata={airport.iata_code}
                location={`${airport.city}, ${airport.state}`}
                website={<a href={airport.website}>{airport.website}</a>}
                phone={airport.phone}
                airportId={airport.id}
                search={search}
                key={airport.id}
              />
            ))
          ) : (
            <Container className="d-flex justify-content-center">
              <Spinner className="ms-3" animation="border" />
            </Container>
          )}
        </Container>
      </Container>

      {!loading && showFilters? (
        <Pagination
          currentPage={currentPage}
          cardsPerPage={cardsPerPage}
          totalCards={totalInstances}
          paginate={paginate}
        />
      ) : (
        ""
      )}
    </Container>
  );
};

export default Airports;
