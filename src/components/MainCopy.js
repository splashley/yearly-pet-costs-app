import React from "react";
import addBtn from "../assets/addBtn.png";
// import { UserInfoContext } from "../UserInfoContext";

const Main = () => {
  const costInfo = [{ categoryName: "", monthlyAmount: "" }];
  const [list, setList] = React.useState(costInfo);

  function yearlyCosts() {}

  return (
    <div className="flex flex-row text-black bg-white shadow-md p-8">
      <div className="left-side">
        <div className="flex">
          <div>
            <button
              onClick={() => {
                const array = [...list, costInfo];
                setList(array);
              }}
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
          {list.map((el, index) => {
            return (
              <div
                key={index}
                className="flex flex-row p-4 my-2 border-solid border-2 border-grey rounded-sm"
              >
                <input
                  name="categoryName"
                  type="text"
                  placeholder="Enter a category here"
                  // value={el.categoryName}
                  onChange={(e) => {}}
                ></input>
                <input
                  name="monthlyAmount"
                  type="number"
                  placeholder="$0"
                  // value={el.monthlyAmount}
                  onChange={(e) => {
                    setList(e.target.value);
                  }}
                ></input>
              </div>
            );
          })}
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
