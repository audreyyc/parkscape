import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ParkEntranceFees = () => {
  const [data, setData] = useState(null);

  const url = "https://api.parkscape.me/parks?";

  useEffect(() => {
    const fetchData = async () => {
      const parksStats = [];

      const response = await axios.get(url);
      let allParksData = response.data.data;
      for (let parkInd in allParksData) {
        let park = allParksData[parkInd];
        if (park["activities"] && park["fee"] != undefined) {
          parksStats.push({
            name: park["name"],
            entranceFee: park["fee"],
            activities: park["activities"].length,
          });
        }
      }

      setData(parksStats);
      console.log(parksStats);
    };
    fetchData();
  }, []);

  return (
    <Container fluid="md">
      <Row style={{ width: "100%", height: 600 }}>
        <h3 className="p-5 text-center">
          Entrance Fee vs Number Of Activities Per Park
        </h3>
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
              <XAxis
                type="number"
                dataKey="entranceFee"
                name="Entrance Fee"
                domain={[0, 50]}
                unit="$"
              />
              <YAxis
                type="number"
                dataKey="activities"
                name="Number Of Activities"
                domain={[0, 75]}
              />
              <ZAxis dataKey="name" name="Park Name" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter name="Parks" data={data} fill="#c06c84" />
            </ScatterChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default ParkEntranceFees;
