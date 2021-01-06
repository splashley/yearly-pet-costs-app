import React from "react";
import AddCategoryButton from "../components/AddCategoryButton";
import EstimatedAmountText from "../components/EstimatedAmountText";
// import CostSlider from "../components/Slider";

const LeftSide = () => {
  return (
    <div>
      <AddCategoryButton />
      <EstimatedAmountText />
      {/* <CostSlider /> */}
    </div>
  );
};

export default LeftSide;
