import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const ParksByFees = () => {
  const [data, setData] = useState(null);

  const url = "https://api.re-park-able.me/parks?";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      let allParksData = response.data.data;

      var map = new Map();

      for (let parkIndex in allParksData) {
        let entranceFee = allParksData[parkIndex]["entranceFee"];
        if (entranceFee != undefined) {
          if (map.get(entranceFee)) {
            map.set(entranceFee, map.get(entranceFee) + 1);
          } else {
            map.set(entranceFee, 1);
          }
        }
      }

      var parksData = [];

      for (let key of map.keys()) {
        let count = map.get(key);
        parksData.push({ name: "$" + key.toString(), count: count });
      }

      parksData.sort(function (a, b) {
        if (a.count == b.count) return 0;
        if (a.count < b.count) return -1;
        if (a.count > b.count) return 1;
      });

      setData(parksData);
    };

    fetchData();
  }, []);

  return (
    <Container fluid="md">
      <Row style={{ width: "100%", height: 600 }}>
        <h3 className="p-5 text-center">Most Common Park Entrance Fees</h3>
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
                fill="#8884d8"
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

export default ParksByFees;
