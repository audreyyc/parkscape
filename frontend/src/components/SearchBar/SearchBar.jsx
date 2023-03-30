import React from "react";
import Container from "react-bootstrap/Container";

const SearchBar = ({ setSearch, searchID }) => {
    return (
        <Container>
            <form
                data-testid="model-search"
                className="d-flex mx-auto mt-5 mb-4"
                role="search"
                style={{ width: "50%" }}
                onSubmit={(e) => {
                e.preventDefault();
                var searchedTerm = document.getElementById(searchID).value;
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
                id={searchID}
                />
                <button className="btn btn-outline-success" type="submit">
                Search
                </button>
            </form>
        </Container>
    );
}

export default SearchBar;