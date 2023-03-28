import React, { CSSProperties } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Parks from "../Parks/Parks.jsx"
import Cities from "../Cities/Cities.jsx"
import Airports from "../Airports/Airports.jsx"
import { useLocation } from "react-router-dom";

const Search = () => {
    // from GeoJobs (https://gitlab.com/sarthaksirotiya/cs373-idb/)
    const location = useLocation();
    const search = location.pathname.split("/search/").at(-1);

    return (
        <>
        <Parks searchInput={search} />
        <Cities searchInput={search} />
        <Airports searchInput={search} />
        </>
    );
};

export default Search;