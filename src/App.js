import React from "react";
import Main from "./components/MainCopy";

function App() {
  return (
    <div className="max-w-full p-6 bg-glacier font-quicksand">
      <h1 className="p-4 text-base text-center text-white font-bold lg:p-10 lg:text-4xl">
        HOW MUCH WILL YOUR PET(S) <br /> ROUGHLY COST THIS YEAR?
      </h1>
      <Main />
      <h1 className="p-2 text-sm text-center text-white font-bold lg:p-3 lg:text-3xl">
        MADE WITH LOVE BY ASHLEY
      </h1>
    </div>
  );
}

export default App;
