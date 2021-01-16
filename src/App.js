import React from "react";
import Main from "./components/MainCopy";

function App() {
  return (
    <div className=" bg-glacier h-screen font-quicksand">
      <h1 className="p-4 text-base text-center text-white font-bold">
        HOW MUCH WILL YOUR PET(S) ROUGHLY COST THIS YEAR?
      </h1>
      <Main />
      <h1 className="p-1 text-sm text-center text-white font-bold">
        MADE WITH LOVE BY ASHLEY
      </h1>
    </div>
  );
}

export default App;
