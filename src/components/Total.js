import React from "react";

const Total = () => {
  const [totalAmount, setTotalAmount] = React.useState(0);

  const calculateTotalAmounts = (props) => {};

  return (
    <div className="font-bold text-center ">
      TOTAL EST: ${totalAmount} PER YEAR
    </div>
  );
};

export default Total;
