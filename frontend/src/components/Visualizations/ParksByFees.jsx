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

const sample = [
  { name: "LOLassss", entranceFee: 45 },
  { name: "LOLasdasdasdasd", entranceFee: 41 },
  { name: "12312312312", entranceFee: 15 },
];

const ParksByFees = () => {
  const [data, setData] = useState(null);

  const url = "https://api.re-park-able.me/parks?";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      let allParksData = response.data.data;

      var minHeap = new MinHeap();

      for (let parkIndex in allParksData) {
        let entranceFee = allParksData[parkIndex]["entranceFee"];
        let name = allParksData[parkIndex]["name"];

        let obj = { name: name, entranceFee: parseInt(entranceFee) };

        if (obj["entranceFee"]) {
          minHeap.add(obj);
        }

        if (minHeap.getLength() > 10) {
          minHeap.remove();
        }
      }

      var parksData = [];
      while (minHeap.getLength() > 0) {
        let temp = minHeap.remove();
        console.log(temp);
        parksData.push(temp);
      }

      parksData.reverse();

      setData(parksData);
    };

    fetchData();
  }, []);

  return (
    <Container fluid="md">
      <Row style={{ width: "100%", height: 600 }}>
        <h3 className="p-5 text-center">
          Top 10 Most Expensive Parks by Entrance Fee
        </h3>
        <Col>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={700} data={data}>
              <XAxis
                dataKey="name"
                textAnchor="end"
                scaleToFit="true"
                interval={0}
                angle="-90"
                height={200}
              />
              <YAxis tickCount={6} />
              <Tooltip />
              <Bar dataKey="entranceFee" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Container>
  );
};

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLength() {
    return this.heap.length;
  }

  // Helper Methods
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  // Functions to create Min Heap

  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  // Removing an element will reomve the
  // top element with highest priority then
  // heapifyDown will be called
  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.hasParent(index) &&
      this.parent(index)["entranceFee"] > this.heap[index]["entranceFee"]
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index)["entranceFee"] <
          this.leftChild(index)["entranceFee"]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (
        this.heap[index]["entranceFee"] <
        this.heap[smallerChildIndex]["entranceFee"]
      ) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
}

export default ParksByFees;
