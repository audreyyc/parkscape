import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AverageSafetyStates = () => {
    const [data, setData] = useState(null);

    const url = "https://api.parkscape.me/cities?";

    useEffect(() => {
        const fetchData = async () => {
            const stateStats = [
                {
                    name: "AL",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "AK",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "AR",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "AZ",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "CA",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "CO",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "CT",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "DE",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "DC",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "FL",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "GA",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "GU",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "HI",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "ID",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "IL",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "IN",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "IA",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "KS",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "KY",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "LA",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "MA",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "MD",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "ME",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "MI",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "MN",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "MO",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "MP",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "MS",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "MT",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "NC",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "ND",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "NH",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "NJ",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "NM",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "NE",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "NV",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "NY",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "OH",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "OK",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "OR",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "PA",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "PR",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "RI",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "SC",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "SD",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "TN",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "TX",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "UT",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "VA",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "VT",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "WA",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "WI",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "WV",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
                {
                    name: "WY",
                    cities: 0,
                    sum: 0,
                    average: 0
                },
            ];

            const response = await axios.get(url);
            let cityData = response.data.data;
            for (let cityInd in cityData){
                let curState = cityData[cityInd]["state"];
                for (let stateInd in stateStats){
                    if (curState == stateStats[stateInd]["name"]){
                        stateStats[stateInd]["cities"] += 1;
                        stateStats[stateInd]["sum"] += cityData[cityInd]["safety"];
                        break;
                    }
                }   
            }

            for (let stateInd in stateStats) {
                if (stateStats[stateInd]["cities"] > 0)
                    stateStats[stateInd]["average"] = stateStats[stateInd]["sum"] / stateStats[stateInd]["cities"];
            }

            setData(stateStats);
        };
        fetchData();
    }, []);

    return (
        <Container fluid="md">
            <Row style={{ width: "100%", height: 600 }}>
                <h3 className="p-5 text-center">Average Safety Rating of Cities in Each State</h3>
                <Col>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart width={500} height={500} data={data}>
                            <XAxis dataKey="name" textAnchor= "end" sclaeToFit="true"  interval={0} angle= "-90" />
                            <YAxis tickCount={6} domain={[0, 'dataMax']} />
                            <Tooltip />
                            <Bar dataKey="average" fill="#c06c84" />
                        </BarChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
};

export default AverageSafetyStates;