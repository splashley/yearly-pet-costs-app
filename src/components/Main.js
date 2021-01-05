import React from "react";

import AddCategoryButton from "../components/AddCategoryButton";
import EstimatedAmountText from "../components/EstimatedAmountText";
// import CostSlider from "../components/Slider";
import PieChart from "../components/PieChart";
import Total from "../components/Total";

const Main = () => {
  return (
    <div className="text-black bg-white shadow-md">
      <AddCategoryButton />
      <EstimatedAmountText />
      {/* <CostSlider /> */}
      <PieChart />
      <Total />
    </div>
  );
};

export default Main;
