import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const TopAirportStates = () => {
    const [data, setData] = useState(null);

    const url = "https://api.parkscape.me/airports?";

    useEffect(() => {
        const fetchData = async () => {
            const states_counts = [
                {
                    name: "Alabama",
                    count: 0
                },
                {
                    name: "Alaska",
                    count: 0
                },
                {
                    name: "American Samoa",
                    count: 0
                },
                {
                    name: "Arizona",
                    count: 0
                },
                {
                    name: "Arkansas",
                    count: 0
                },
                {
                    name: "California",
                    count: 0
                },
                {
                    name: "Colorado",
                    count: 0
                },
                {
                    name: "Connecticut",
                    count: 0
                },
                {
                    name: "Delaware",
                    count: 0
                },
                {
                    name: "District of Columbia",
                    count: 0
                },
                {
                    name: "Florida",
                    count: 0
                },
                {
                    name: "Georgia",
                    count: 0
                },
                {
                    name: "Guam",
                    count: 0
                },
                {
                    name: "Hawaii",
                    count: 0
                },
                {
                    name: "Idaho",
                    count: 0
                },
                {
                    name: "Illinois",
                    count: 0
                },
                {
                    name: "Indiana",
                    count: 0
                },
                {
                    name: "Iowa",
                    count: 0
                },
                {
                    name: "Kansas",
                    count: 0
                },
                {
                    name: "Kentucky",
                    count: 0
                },
                {
                    name: "Louisiana",
                    count: 0
                },
                {
                    name: "Maine",
                    count: 0
                },
                {
                    name: "Maryland",
                    count: 0
                },
                {
                    name: "Massachusetts",
                    count: 0
                },
                {
                    name: "Michigan",
                    count: 0
                },
                {
                    name: "Minnesota",
                    count: 0
                },
                {
                    name: "Mississippi",
                    count: 0
                },
                {
                    name: "Missouri",
                    count: 0
                },
                {
                    name: "Montana",
                    count: 0
                },
                {
                    name: "Nebraska",
                    count: 0
                },
                {
                    name: "Nevada",
                    count: 0
                },
                {
                    name: "New Hampshire",
                    count: 0
                },
                {
                    name: "New Jersey",
                    count: 0
                },
                {
                    name: "New Mexico",
                    count: 0
                },
                {
                    name: "New York",
                    count: 0
                },
                {
                    name: "North Carolina",
                    count: 0
                },
                {
                    name: "North Dakota",
                    count: 0
                },
                {
                    name: "Ohio",
                    count: 0
                },
                {
                    name: "Oklahoma",
                    count: 0
                },
                {
                    name: "Oregon",
                    count: 0
                },
                {
                    name: "Pennsylvania",
                    count: 0
                },
                {
                    name: "Rhode Island",
                    count: 0
                },
                {
                    name: "South Carolina",
                    count: 0
                },
                {
                    name: "South Dakota",
                    count: 0
                },
                {
                    name: "Tennessee",
                    count: 0
                },
                {
                    name: "Texas",
                    count: 0
                },
                {
                    name: "Utah",
                    count: 0
                },
                {
                    name: "Vermont",
                    count: 0
                },
                {
                    name: "Virgin Island",
                    count: 0
                },
                {
                    name: "Virginia",
                    count: 0
                },
                {
                    name: "Washington",
                    count: 0
                },
                {
                    name: "West Virginia",
                    count: 0
                },
                {
                    name: "Wisconsin",
                    count: 0
                },
                {
                    name: "Wyoming",
                    count: 0
                },
            ];

            const response = await axios.get(url);
            let airportData = response.data.data;
            for (let airportInd in airportData){
                let curState = airportData[airportInd]["state"];
                for (let stateInd in states_counts){
                    if (curState == states_counts[stateInd]["name"]){
                        states_counts[stateInd]["count"] += 1;
                        break;
                    }
                }
            }
            setData(states_counts);
        };
        fetchData();
    }, []);

    return (
        <Container fluid="md">
            <Row style={{ width: "100%", height: 600 }}>
                <h3 className="p-5 text-center">Number of Airports in Each State</h3>
                <Col>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={500} height={500}>
                            <Pie
                                dataKey="count"
                                isAnimationActive={false}
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={200}
                                fill="#c06c84"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
};

export default TopAirportStates;