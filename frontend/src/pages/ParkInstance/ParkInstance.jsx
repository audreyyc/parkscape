import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ParkInstance = () => {
  const parkId = useParams().id;
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios.get(`http://127.0.0.1:5000/park/${parkId}`).then((res) => {
  //     console.log(res);
  //   });
  // }, [parkId]);

  return (
    <div className="ParkInstance">
      <h1>Park Instance</h1>
    </div>
  );
};

export default ParkInstance;
