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
  const [sort, setSort] = useState(null);
  const [state, setState] = useState(null);
  const [website, setWebsite] = useState(null);
  const [phone, setPhone] = useState(null);

  function api() {
    let searchURI = search ? `&search=${encodeURI(search)}` : "";

    let sortURI = sort ? `&sort=${encodeURI(sort)}` : "";
    let stateURI = state ? `&state=${encodeURI(state)}` : "";
    let websiteURI = website ? `&website=${encodeURI(website)}` : "";
    let phoneURI = phone ? `&phone=${encodeURI(phone)}` : "";

    let size_url = `https://api.parkscape.me/airports?${searchURI}${sortURI}${stateURI}${websiteURI}${phoneURI}`;
    let url = `https://api.parkscape.me/airports?page=${currentPage}${searchURI}${sortURI}${stateURI}${websiteURI}${phoneURI}`;

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

      {showFilters && (
        <Container>
          <form
            className="d-flex mx-auto mt-5 mb-4"
            role="search"
            style={{ width: "50%" }}
            onSubmit={(e) => {
              e.preventDefault();
              var searchedTerm =
                document.getElementById("airportsSearch").value;
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
                id="sort"
                onChange={() => {
                  var value = document.getElementById("sort").value;
                  if (value == 0) {
                    setSort(null);
                  } else if (value == 1) {
                    setSort("name_asc");
                  } else {
                    setSort("name_desc");
                  }
                }}
              >
                <option value="0">Sort</option>
                <option value="1">Name (A-Z)</option>
                <option value="2">Name (Z-A)</option>
              </select>
            </div>
            <div className="col">
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                defaultValue={"0"}
                id="phone"
                onChange={() => {
                  var e = document.getElementById("phone");
                  var value = e.value;
                  if (value == 0) {
                    setPhone(null);
                  } else {
                    setPhone(e.options[e.selectedIndex].text);
                  }
                }}
              >
                <option value="0">Phone</option>
                <option value="1">yes</option>
                <option value="2">no</option>
              </select>
            </div>
            <div className="col">
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                defaultValue={"0"}
                id="Website"
                onChange={() => {
                  var e = document.getElementById("Website");
                  var value = e.value;
                  if (value == 0) {
                    setWebsite(null);
                  } else {
                    setWebsite(e.options[e.selectedIndex].text);
                  }
                }}
              >
                <option value="0">Website</option>
                <option value="1">yes</option>
                <option value="2">no</option>
              </select>
            </div>
            <div className="col">
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                defaultValue={"0"}
                id="states"
                onChange={() => {
                  var e = document.getElementById("states");
                  if (e.value == 0) {
                    setState(null);
                  } else {
                    setState(e.options[e.selectedIndex].text);
                  }
                }}
              >
                {states.map((score, index) => (
                  <option value={index} key={index}>
                    {score}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-center mt-3 mb-5">
            <button
              className="btn btn-large btn-success btn-lg"
              type="apply"
              onClick={() => {
                api();
              }}
            >
              Apply
            </button>
          </div>
        </Container>
      )}

      <Container className="px-4">
        <Container className="row gx-3">
          {!loading ? (
            data.map((airport, index) => (
              <AirportCard
                name={airport.name}
                iata={airport.iata_code}
                location={`${airport.city}, ${airport.state}`}
                website={airport.website}
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

      {!loading && showFilters ? (
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

const states = [
  "State",
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export default Airports;
