import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import CityCard from "../../components/CityCard/CityCard";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import Sort from "../../components/Sort/Sort.jsx";
import Filter from "../../components/Filter/Filter";
import { Spinner } from "react-bootstrap";

const Cities = ({ searchInput, showFilters }) => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalInstances, setTotalInstances] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchInput);
  const [sort, setSort] = useState(null);
  const [state, setState] = useState(null);
  const [budget, setBudget] = useState(null);
  const [safety, setSafety] = useState(null);

  function api() {
    let searchURI = search ? `&search=${encodeURI(search)}` : "";

    let sortURI = sort ? `&sort=${encodeURI(sort)}` : "";
    let stateURI = state ? `&state=${encodeURI(state)}` : "";
    let budgetURI = budget ? `&cost=${encodeURI(budget)}` : "";
    let safetyURI = safety ? `&safety=${encodeURI(safety)}` : "";

    let size_url = `https://api.parkscape.me/cities?${searchURI}${sortURI}${stateURI}${budgetURI}${safetyURI}`;
    let url = `https://api.parkscape.me/cities?page=${currentPage}${searchURI}${sortURI}${stateURI}${budgetURI}${safetyURI}`;

    axios.get(size_url).then((res) => {
      setTotalInstances(res.data.count);
    });

    axios.get(url).then((res) => {
      setData(res.data.data);
      console.log(res.data);
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
      console.log("hello");
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
        <h1>Cities!</h1>
        <p style={{ fontSize: "20px", color: "darkgray" }}>
          {!loading ? totalInstances : "---"}
        </p>
      </Container>

      {showFilters && (
        <Container>
          <SearchBar setSearch={setSearch} searchID={"citiesSearch"}/>

          <div className="row mx-auto" style={{ width: "80%" }}>
            <div className="col">
              <Sort setSort={setSort} />
            </div>

            <div className="col">
              <Filter
                filterId={"budget"}
                setFilter={setBudget}
                data={budgets}
              />
            </div>

            <div className="col">
              <Filter
                filterId={"safety"}
                setFilter={setSafety}
                data={safetyOptions}
              />
            </div>
            
            <div className="col">
              <Filter filterId={"states"} setFilter={setState} data={states} />
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
            data.map((city, index) => (
              <CityCard
                name={city.long_name}
                imageSrc={city.photo}
                rating={city.rating}
                budget={city.cost}
                population={city.population}
                safety={city.safety}
                cityId={city.id}
                key={city.id}
                search={search}
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

const safetyOptions = ["Safety Score", "1", "2", "3", "4", "5"];

const budgets = [
  "Max Cost Score",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
];

const states = [
  "State",
  "AK",
  "AL",
  "AR",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DC",
  "DE",
  "FL",
  "GA",
  "GU",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MP",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY",
];

export default Cities;
