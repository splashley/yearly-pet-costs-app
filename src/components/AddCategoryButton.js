import React from "react";
import addBtn from "../assets/addBtn.png";

const AddCategoryButton = () => {
  return (
    <div className="flex">
      <div>
        <button>
          <img src={addBtn} className="w-6" alt="Add a Category" />
        </button>
      </div>
      <div>
        <a
          href="www.google.com"
          className="pl-1.5 text-center text-black font-bold"
        >
          ADD CATEGORY
        </a>
      </div>
    </div>
  );
};

export default AddCategoryButton;
