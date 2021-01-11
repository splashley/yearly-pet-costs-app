import React, { useState } from "react";
import addBtn from "../assets/addBtn.png";

const Main = () => {
  const [categoryAndAmounts, setCategoryAndAmounts] = useState([]);

  const [totalAmount, setTotalAmount] = useState({
    amount: 0,
  });

  return (
    <div className="flex flex-row text-black bg-white shadow-md p-8">
      <div className="left-side">
        <div className="flex">
          <div>
            <button
              onClick={() =>
                setCategoryAndAmounts([
                  ...categoryAndAmounts,
                  `blah blah blah ${categoryAndAmounts}`,
                ])
              }
              type="button"
            >
              <img
                src={addBtn}
                className="w-6 pl-1.5 text-center text-black font-bold"
                alt="Add a Category"
              />
              ADD CATEGORY
            </button>
          </div>
        </div>
        <h1 className="text-black text-xs">
          ENTER YOUR ESTIMATED AMOUNTS PER MONTH FOR EACH CATEGORY
        </h1>
        <div id="CategoryList">
          <ul>
            {categoryAndAmounts.map((name) => (
              <li>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right-side">
        <div id="pieChart"></div>
        <div className="font-bold text-center ">
          TOTAL EST: {/*${totalAmount}*/} PER YEAR
        </div>
      </div>
    </div>
  );
};

export default Main;
