import React from "react";
import addBtn from "../assets/addBtn.png";
import { PieChart } from "react-minimal-pie-chart";

const Main = () => {
  const defaultValue = [
    {
      categoryName: "",
      monthlyAmount: "",
      color: generateRandomColour(), // ! essentialy we are just calling our color function when initiating a new category
    },
  ];

  const [list, setList] = React.useState(defaultValue);
  const [runningTotal, setRunningTotal] = React.useState(0); // * get runningTotal in state
  const [chartOptions, setChartOptions] = React.useState([]);

  //  you'll need to make a function that builds that data object property with your categories array

  const buildChartOptions = React.useCallback(() => {
    const array = [...list];
    const optionsObject = [];
    array.forEach((category) => {
      optionsObject.push({
        title: category.categoryName,
        value: Number(category.monthlyAmount),
        color: category.color,
      });
    });
    setChartOptions(optionsObject);
  }, [list]);

  // *
  // * Simple function to loop through the list and add up the monthlyAmount values
  // *

  const updateTotal = React.useCallback(() => {
    let total = 0;
    list.forEach((item) => {
      if (!item.monthlyAmount) return; // * If we see a new category with an undefined monthlyAmount value, move along
      total = total + Number(item.monthlyAmount) * 12; // * Add the monthlyAmount to the total
    });
    setRunningTotal(total.toLocaleString()); // * Set the value in state so the render function can read and update it on the page
  }, [list]);

  // *
  // * This could definately be more DRY but this gives you an idea of a way to get it working!
  // *

  const handleNameChange = React.useCallback(
    (name, index) => {
      let array = [...list]; // * creates the clone of the list state so we aren't mutating state directly - big no no
      array[index].categoryName = name; // * inside your cloned state, update the categoryName using the index we passed in to our new value
      setList(array); // * after we updated our new value, update your state with the new data
      buildChartOptions();
    },
    [buildChartOptions, list]
  );

  const handleAmountChange = React.useCallback(
    (amount, index) => {
      let array = [...list]; // * creates the clone of the list state so we aren't mutating state directly - big no no
      array[index].monthlyAmount = amount; // * inside your cloned state, update the monthlyAmount using the index we passed in to our new value
      setList(array); // * after we updated our new value, update your state with the new data
      updateTotal(); // * update our totals value when an amount changes
      buildChartOptions();
    },
    [buildChartOptions, updateTotal, list]
  );

  // * moving this logic to a separate function to clean up html

  const addEmptyCategory = React.useCallback(() => {
    const totalCategories = list.length;
    if (totalCategories > 10) {
      alert("You have reached the max");
    } else {
      const newArr = [...list, ...defaultValue]; // * create a new array using the existing list and the default value. We have to use the spread operator here on the default value because it is initialized as an array
      setList(newArr); // * set our state with the new default value
      updateTotal();
    }
  }, [updateTotal, list, defaultValue]);

  function generateRandomColour() {
    const randomColour = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColour}`;
  }

  const removeCategory = React.useCallback(
    (index) => {
      console.log(index);
      let array = [...list];
      array.splice(index, 1);
      setList(array);
      buildChartOptions();
      updateTotal();
    },
    [buildChartOptions, updateTotal, list]
  );

  return (
    <div className="p-4 flex flex-col md:flex-row-reverse text-black bg-white shadow-md sm:p-8">
      <div className="p-2 m-auto h-3/6 w-3/6 md:p-4">
        <div id="pieChart" className="p-1 m-auto">
          <PieChart data={chartOptions} />
        </div>
        <div className="my-2 text-xs font-bold text-center">
          TOTAL EST: ${runningTotal} PER YEAR
        </div>
      </div>
      <div className="md:m-5">
        <div className="">
          <div className="flex flex-column">
            <button
              className="flex tracking-widest text-sm p-1 items-center border-solid border-2 border-gray-50 rounded md:p-3 md:text-lg"
              onClick={() => {
                addEmptyCategory();
              }}
            >
              <img
                src={addBtn}
                className="w-6 text-black font-bold"
                alt="Add a Category"
              />
              &ensp;<strong>ADD CATEGORY</strong>
            </button>
          </div>
        </div>
        <h1 className="my-3 text-left text-xs text-black">
          ENTER YOUR ESTIMATED AMOUNTS PER MONTH FOR EACH CATEGORY
        </h1>
        <div id="CategoryList">
          {list.map((el, index) => {
            return (
              <div
                id="categoryDetails"
                key={index}
                className="flex flex-row p-3 items-baseline my-2 border-solid border-2 border-gray-50 rounded-sm text-xs w-72 md:rounded-lg lg:text-sm lg:w-80"
              >
                <input
                  name="categoryName"
                  type="text"
                  className="text-xs w-32 mr-4 tracking-widest lg:text-sm lg:w-40"
                  placeholder="Enter a category"
                  value={el.categoryName}
                  onChange={(e) => {
                    handleNameChange(e.target.value, index); // * send off the value of the input and the index to our handleNameChangefunction
                  }}
                ></input>
                <input
                  name="monthlyAmount"
                  type="number"
                  max="1000"
                  className="flex tracking-widest items-baseline relative outline-none rounded py-1 px-2 w-20 bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline lg:text-sm"
                  placeholder="$0"
                  value={el.monthlyAmount}
                  onChange={(e) => {
                    handleAmountChange(e.target.value, index); // * send off the value of the input and the index to our handleAmountChange function
                  }}
                ></input>
                &nbsp;&nbsp;/MONTH
                <br />
                <div>
                  <input
                    className="bg-blue"
                    type="range"
                    id="amount"
                    name="amount"
                    min="0"
                    max="1000"
                    onChange={(el) => {
                      handleAmountChange(el.target.value, index);
                    }}
                    value={el.monthlyAmount}
                  ></input>
                </div>
                <button
                  className="removeItem"
                  onClick={(e) => {
                    removeCategory(index);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
