import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ParkInstance = () => {
  const parkId = useParams().id;
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios.get(`/parks/<${parkId}>`).then((res) => {
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
