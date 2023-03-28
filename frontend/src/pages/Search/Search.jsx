import React, { } from "react";
import Container from "react-bootstrap/Container";
import Parks from "../Parks/Parks.jsx";
import Cities from "../Cities/Cities.jsx";
import Airports from "../Airports/Airports.jsx";
import { useLocation } from "react-router-dom";

const Search = () => {
    // from GeoJobs (https://gitlab.com/sarthaksirotiya/cs373-idb/)
    const location = useLocation();
    var search = location.pathname.split("/search/").at(-1);
    if (search.includes("%20")) {
        search = search.replace("%20", " ");
    }
    search = search.replace("/", "");

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