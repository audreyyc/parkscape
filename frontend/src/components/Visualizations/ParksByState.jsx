import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ParksByState = () => {
  const [data, setData] = useState(null);

  const url = "https://api.parkscape.me/parks?";

  useEffect(() => {
    const fetchData = async () => {
      const stateStats = [
        {
          name: "AL",
          parks: 0,
        },
        {
          name: "AK",
          parks: 0,
        },
        {
          name: "AR",
          parks: 0,
        },
        {
          name: "AZ",
          parks: 0,
        },
        {
          name: "CA",
          parks: 0,
        },
        {
          name: "CO",
          parks: 0,
        },
        {
          name: "CT",
          parks: 0,
        },
        {
          name: "DE",
          parks: 0,
        },
        {
          name: "DC",
          parks: 0,
        },
        {
          name: "FL",
          parks: 0,
        },
        {
          name: "GA",
          parks: 0,
        },
        {
          name: "GU",
          parks: 0,
        },
        {
          name: "HI",
          parks: 0,
        },
        {
          name: "ID",
          parks: 0,
        },
        {
          name: "IL",
          parks: 0,
        },
        {
          name: "IN",
          parks: 0,
        },
        {
          name: "IA",
          parks: 0,
        },
        {
          name: "KS",
          parks: 0,
        },
        {
          name: "KY",
          parks: 0,
        },
        {
          name: "LA",
          parks: 0,
        },
        {
          name: "MA",
          parks: 0,
        },
        {
          name: "MD",
          parks: 0,
        },
        {
          name: "ME",
          parks: 0,
        },
        {
          name: "MI",
          parks: 0,
        },
        {
          name: "MN",
          parks: 0,
        },
        {
          name: "MO",
          parks: 0,
        },
        {
          name: "MP",
          parks: 0,
        },
        {
          name: "MS",
          parks: 0,
        },
        {
          name: "MT",
          parks: 0,
        },
        {
          name: "NC",
          parks: 0,
        },
        {
          name: "ND",
          parks: 0,
        },
        {
          name: "NH",
          parks: 0,
        },
        {
          name: "NJ",
          parks: 0,
        },
        {
          name: "NM",
          parks: 0,
        },
        {
          name: "NE",
          parks: 0,
        },
        {
          name: "NV",
          parks: 0,
        },
        {
          name: "NY",
          parks: 0,
        },
        {
          name: "OH",
          parks: 0,
        },
        {
          name: "OK",
          parks: 0,
        },
        {
          name: "OR",
          parks: 0,
        },
        {
          name: "PA",
          parks: 0,
        },
        {
          name: "PR",
          parks: 0,
        },
        {
          name: "RI",
          parks: 0,
        },
        {
          name: "SC",
          parks: 0,
        },
        {
          name: "SD",
          parks: 0,
        },
        {
          name: "TN",
          parks: 0,
        },
        {
          name: "TX",
          parks: 0,
        },
        {
          name: "UT",
          parks: 0,
        },
        {
          name: "VA",
          parks: 0,
        },
        {
          name: "VT",
          parks: 0,
        },
        {
          name: "WA",
          parks: 0,
        },
        {
          name: "WI",
          parks: 0,
        },
        {
          name: "WV",
          parks: 0,
        },
        {
          name: "WY",
          parks: 0,
        },
      ];

      const response = await axios.get(url);
      let parkData = response.data.data;
      for (let parkInd in parkData) {
        let currState = parkData[parkInd]["states"];
        for (let stateInd in stateStats) {
          if (currState == stateStats[stateInd]["name"]) {
            stateStats[stateInd]["parks"] += 1;
            break;
          }
        }
      }

      setData(stateStats);
    };
    fetchData();
  }, []);

  return (
    <Container fluid="md">
      <Row style={{ width: "100%", height: 600 }}>
        <h3 className="p-5 text-center">Number of Parks in Each State</h3>
        <Col>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={500} data={data}>
              <XAxis
                dataKey="name"
                textAnchor="end"
                scaleToFit="true"
                interval={0}
                angle="-90"
              />
              <YAxis tickCount={6} />
              <Tooltip />
              <Bar dataKey="parks" fill="#c06c84" />
            </BarChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default ParksByState;
