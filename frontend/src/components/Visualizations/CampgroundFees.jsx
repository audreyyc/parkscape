import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';


const CampgroundFees = () => {
    const [data, setData] = useState(null);

    const url = "https://api.re-park-able.me/campgrounds?";

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url);
            let campData = response.data.data;
            const fee_sites = [];

            for (let campInd in campData){
                let curFees = campData[campInd]["fees"];
                let curSites = campData[campInd]["totalSites"];
                let curName = campData[campInd]["name"];
                // if (curSites == 5000){
                //     continue;
                // }
                // if (curFees > 400){
                //     continue;
                // }
                fee_sites.push({
                    name: curName,
                    fee: curFees,
                    sites: curSites
                })
            }
            setData(fee_sites);
        }
        fetchData();
    }, [])

    return (
        <Container fluid="md">
            <Row style={{ width: "100%", height: 600 }}>
                <h3 className="p-5 text-center">Campground Fee vs Campground Number of Sites</h3>
                <Col>
                    <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart
                            width={400}
                            height={400}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid />
                            <XAxis type="number" dataKey="fee" name="Campground Fee" domain={[0, 500]} unit="$"/>
                            <YAxis type="number" dataKey="sites" name="Campground Number of Sites" domain={[0, 120]}/>
                            <ZAxis dataKey="name" name="Campground"/>
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter name="Campgrounds" data={data} fill="#8884d8" />
                        </ScatterChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>

    )
}

export default CampgroundFees;