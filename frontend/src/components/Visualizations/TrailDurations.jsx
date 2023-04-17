import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TrailDurations = () => {
    const [data, setData] = useState(null);

    const url = "https://api.re-park-able.me/trails?";

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url);
            let trailData = response.data.data;
            const durations = new Map();

            for (let trailInd in trailData) {
                let time = trailData[trailInd]["duration"];
                if (durations.get(time) == undefined) {
                    durations.set(time, 1);
                } else {
                    durations.set(time, durations.get(time) + 1);
                }
            }
            
            const durationsData = [];
            for (let duration of durations.keys()) {
                let numTrails = durations.get(duration);
                durationsData.push({time: duration, count: numTrails});
            }
            
            durationsData.sort(function(a, b) {
                if(a.time == b.time)
                    return 0;
                if(a.time < b.time)
                    return -1;
                if(a.time > b.time)
                    return 1;
            });

            setData(durationsData);
        };
        fetchData();
    }, []);

    return (
        <Container fluid="md">
            <Row style={{ width: "100%", height: 600 }}>
                <h3 className="p-5 text-center">Number of Trails Per Trail Duration</h3>
                <Col>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart width={500} height={500} data={data}>
                            <XAxis dataKey="time" scaleToFit="true" interval={5} />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
};

export default TrailDurations;