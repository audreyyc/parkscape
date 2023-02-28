import React from "react";
import Container from "react-bootstrap/esm/Container";
import cities_json from "./cities.json";
import CityCard from "../../components/CityCard/CityCard";

function Cities() {
  return (
    <>
      <Container className="container text-center mt-5 mb-4">
        <h1>Cities!</h1>
        <p style={{ fontSize: "20px", color: "darkgray" }}>
          {cities_json.length}
        </p>
      </Container>

      <Container>
        <form
          class="d-flex mx-auto mt-5 mb-4"
          role="search"
          style={{ width: "50%" }}
        >
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        <div class="row mx-auto" style={{ width: "80%" }}>
          <div class="col">
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>Sort</option>
              <option value="1">Name (A-Z)</option>
              <option value="2">Name (Z-A)</option>
              <option value="3">State (A-Z)</option>
              <option value="3">State (Z-A)</option>
            </select>
          </div>
          <div class="col">
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>Phone</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
          <div class="col">
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>Email</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
          <div class="col">
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>State</option>
              <option value="1">TX</option>
              <option value="2">CO</option>
              <option value="3">NV</option>
            </select>
          </div>
        </div>

        <div class="text-center mt-3 mb-5">
          <button class="btn btn-large btn-success btn-lg" type="apply">
            Apply
          </button>
        </div>
      </Container>

      <Container className="px-4">
        <Container className="row gx-3">
          {cities_json.map((city, index) => (
            <CityCard
              name={city.long_name}
              imageSrc={city.photo}
              rating={city.rating}
              budget={city.cost}
              population={city.population}
              safety={city.safety}
              cityId={city.id}
              key={city.id}
            />
          ))}
        </Container>
      </Container>
    </>
  );
}

export default Cities;
