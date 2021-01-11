import React, { useState } from "react";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

const Main = () => {
  const [categoryAndAmounts, setCategoryAndAmounts] = useState({
    amount: 0,
    category: "",
  });

  return (
    <div className="flex flex-row text-black bg-white shadow-md p-8">
      <div>
        <LeftSide />
      </div>
      <div>
        <RightSide />
      </div>
    </div>
  );
};

export default Main;
