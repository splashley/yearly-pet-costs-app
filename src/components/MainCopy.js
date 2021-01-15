import React from "react";
import addBtn from "../assets/addBtn.png";
import { PieChart } from "react-minimal-pie-chart";

const Main = () => {
  const defaultValue = [
    {
      categoryName: "",
      monthlyAmount: "",
    },
  ];

  const [list, setList] = React.useState(defaultValue);
  const [runningTotal, setRunningTotal] = React.useState(0); // * get runningTotal in state
  const [chartOptions, setChartOptions] = React.useState([]);

  // *
  // * Simple function to loop through the list and add up the monthlyAmount values
  // *

  function updateTotal() {
    let total = 0;
    list.forEach((item) => {
      if (!item.monthlyAmount) return; // * If we see a new category with an undefined monthlyAmount value, move along
      total = total + Number(item.monthlyAmount) * 12; // * Add the monthlyAmount to the total
    });
    setRunningTotal(total.toLocaleString()); // * Set the value in state so the render function can read and update it on the page
  }

  // *
  // * This could definately be more DRY but this gives you an idea of a way to get it working!
  // *

  function handleNameChange(name, index) {
    let array = [...list]; // * creates the clone of the list state so we aren't mutating state directly - big no no
    array[index].categoryName = name; // * inside your cloned state, update the categoryName using the index we passed in to our new value
    setList(array); // * after we updated our new value, update your state with the new data
    buildChartOptions();
  }

  function handleAmountChange(amount, index) {
    let array = [...list]; // * creates the clone of the list state so we aren't mutating state directly - big no no
    array[index].monthlyAmount = amount; // * inside your cloned state, update the monthlyAmount using the index we passed in to our new value
    setList(array); // * after we updated our new value, update your state with the new data
    updateTotal(); // * update our totals value when an amount changes
    buildChartOptions();
  }

  // * moving this logic to a separate function to clean up html
  function addEmptyCategory() {
    const totalCategories = list.length;
    if (totalCategories > 10) {
      alert("You have reached the max");
    } else {
      const newArr = [...list, ...defaultValue]; // * create a new array using the existing list and the default value. We have to use the spread operator here on the default value because it is initialized as an array
      setList(newArr); // * set our state with the new default value
      updateTotal();
    }
  }

  function generateRandomColour() {
    const randomColour = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColour}`;
  }

  //  you'll need to make a function that builds that data object property with your categories array
  function buildChartOptions() {
    const array = [...list];
    const optionsObject = [];
    array.forEach((category) => {
      optionsObject.push({
        title: category.categoryName,
        value: Number(category.monthlyAmount),
        color: generateRandomColour(),
      });
    });
    setChartOptions(optionsObject);
  }

  return (
    <div className="flex flex-row text-black bg-white shadow-md p-8">
      <div className="left-side">
        <div className="flex">
          <div>
            <button
              className="align-baseline"
              onClick={() => {
                addEmptyCategory();
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
                className="flex flex-row p-4 my-2 border-solid border-2 border-grey rounded-sm text-xs"
              >
                <input
                  name="categoryName"
                  type="text"
                  className="text-xs"
                  placeholder="Enter a category here"
                  value={el.categoryName}
                  onChange={(e) => {
                    handleNameChange(e.target.value, index); // * send off the value of the input and the index to our handleNameChangefunction
                  }}
                ></input>
                <input
                  name="monthlyAmount"
                  type="number"
                  className="relative outline-none rounded py-1 px-2 w-20 bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
                  placeholder="$0"
                  value={el.monthlyAmount}
                  onChange={(e) => {
                    handleAmountChange(e.target.value, index); // * send off the value of the input and the index to our handleAmountChange function
                  }}
                ></input>{" "}
                /monthly
              </div>
            );
          })}
        </div>
      </div>
      <div className="right-side">
        <div id="pieChart" className="p-4">
          <PieChart data={chartOptions} />
        </div>
        <div className="font-bold text-center ">
          TOTAL EST: ${runningTotal} PER YEAR
        </div>
      </div>
    </div>
  );
};

export default Main;
