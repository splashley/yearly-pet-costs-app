import React from "react";
import PieChart from "../components/PieChart";
import Total from "../components/Total";

const RightSide = (props) => {
  return (
    <div>
      <PieChart />
      <Total />
    </div>
  );
};

export default RightSide;
