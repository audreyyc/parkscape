import React, { } from "react";
import Container from "react-bootstrap/Container";
import Parks from "../Parks/Parks.jsx";
import Cities from "../Cities/Cities.jsx";
import Airports from "../Airports/Airports.jsx";
import { useLocation } from "react-router-dom";

const Search = () => {
    // from GeoJobs (https://gitlab.com/sarthaksirotiya/cs373-idb/)
    const location = useLocation();
    const input = location.pathname.split("/search/").at(-1);
    const search = input.replace("%20", " ");

    return (
        <>
        <Container className="mb-5">
            <Parks searchInput={search} showFilters={false}/>
            <Cities searchInput={search} showFilters={false}/>
            <Airports searchInput={search} showFilters={false}/>
        </Container>
        </>
    );
};

export default Search;