import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import ParkCard from "../../../src/components/ParkCard/ParkCard.jsx";
import CityCard from "../../components/CityCard/CityCard.jsx";
import AirportCard from "../../components/AirportCard/AirportCard.jsx";
import { useLocation } from "react-router-dom"; // from GeoJobs
import { Spinner } from "react-bootstrap";

const Search = ({searchInput}) => {
    const [parkData, setParkData] = useState(null);
    const [cityData, setCityData] = useState(null);
    const [airportData, setAirportData] = useState(null);
    const [parkInstances, setParkInstances] = useState(null);
    const [cityInstances, setCityInstances] = useState(null);
    const [airportInstances, setAirportInstances] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    // const [search, setSearch] = useState(searchInput);
    
    const location = useLocation();
    const search = location.pathname.split("/search/").at(-1);
    // geoJobs
    // const queryRE = new RegExp(`(?:${search.replaceAll("%20", "|")})`, "i");
    // const client = axios.create({
    //     baseURL: "https://api.parkscape.me/search/",
    // });


    function api() {
        let searchURI = search ? `&search=${encodeURI(search)}` : "";

        // parks
        let park_size_url = `https://api.parkscape.me/parks?${searchURI}`;
        let park_url = `https://api.parkscape.me/parks?page=${currentPage}${searchURI}`;

        axios.get(park_size_url).then((res) => {
        setParkInstances(res.data.count);
        });

        axios.get(park_url).then((res) => {
        setParkData(res.data.data);
        });
        
        // cities
        let city_size_url = `https://api.parkscape.me/cities?${searchURI}`;
        let city_url = `https://api.parkscape.me/cities?page=${currentPage}${searchURI}`;

        axios.get(city_size_url).then((res) => {
        setCityInstances(res.data.count);
        });

        axios.get(city_url).then((res) => {
        setCityData(res.data.data);
        });

        // airports
        let airport_size_url = `https://api.parkscape.me/airports?${searchURI}`;
        let airport_url = `https://api.parkscape.me/airports?page=${currentPage}${searchURI}`;

        axios.get(airport_size_url).then((res) => {
        setAirportInstances(res.data.count);
        });

        axios.get(airport_url).then((res) => {
        setAirportData(res.data.data);
        });
    }

    // useEffect(() => {
    //     if (searchInput) {
    //     setSearch(searchInput);
    //     }
    // }, [searchInput]);

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
        if (parkData) setLoading(false);
    }, [parkData]);

    useEffect(() => {
        if (cityData) setLoading(false);
    }, [cityData]);

    useEffect(() => {
        if (airportData) setLoading(false);
    }, [airportData]);

    return (
    <>
        {/* Parks */}
        <Container className="d-flex justify-content-center flex-column">
            <Container className="container text-center mt-5 mb-4">
                <h1>Parks</h1>
                <p style={{ fontSize: "20px", color: "darkgray" }}>
                    {!loading ? parkInstances : "---"}
                </p>
            </Container>

            <Container className="px-4">
                <Container className="row gx-3">
                {!loading ? (
                    parkData.map((park, index) => (
                    <ParkCard
                        title={park.name}
                        imageSrc={park.photos[0]}
                        operatingHours={park.weekdays}
                        phone={park.phone}
                        email={park.email}
                        parkId={park.id}
                        key={park.id}
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
        </Container>

        {/* Cities */}
        <Container className="d-flex justify-content-center flex-column">
            <Container className="container text-center mt-5 mb-4">
                <h1>Cities</h1>
                <p style={{ fontSize: "20px", color: "darkgray" }}>
                {!loading ? cityInstances : "---"}
                </p>
            </Container>

            <Container className="px-4">
                <Container className="row gx-3">
                {!loading ? (
                    cityData.map((city, index) => (
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
        </Container>

        {/* Airports */}
        <Container className="d-flex justify-content-center flex-column">
            <Container className="container text-center mt-5 mb-4">
                <h1>Airports</h1>
                <p style={{ fontSize: "20px", color: "darkgray" }}>
                {!loading ? airportInstances : "---"}
                </p>
            </Container>

            <Container className="px-4">
                <Container className="row gx-3">
                {!loading ? (
                    airportData.map((airport, index) => (
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
        </Container>
    </>
    );
};

export default Search;