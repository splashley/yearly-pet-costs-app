import React from "react";
import AddCategoryButton from "../components/AddCategoryButton";
import EstimatedAmountText from "../components/EstimatedAmountText";
// import CategoryNameAndCosts from "../components/CategoryNameAndCosts";

const LeftSide = (props) => {
  return (
    <div>
      <AddCategoryButton />
      <EstimatedAmountText />
      {/* <CategoryNameAndCosts /> */}
    </div>
  );
};

export default LeftSide;
