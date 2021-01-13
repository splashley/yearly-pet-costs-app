import React from "react";
import addBtn from "../assets/addBtn.png";
import CategorySlider from "./CategoryNameAndCosts";

const AddCategoryButton = () => {
  function addCategory() {
    React.createElement(CategorySlider);
  }

  return (
    <div className="flex">
      <div>
        <button onClick={addCategory} type="button">
          <img
            src={addBtn}
            className="w-6 pl-1.5 text-center text-black font-bold"
            alt="Add a Category"
          />
          ADD CATEGORY
        </button>
      </div>
      <div id="CategoryList"></div>
    </div>
  );
};

export default AddCategoryButton;
