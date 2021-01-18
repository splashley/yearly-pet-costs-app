import React from "react";
import Main from "./components/MainCopy";

function App() {
  return (
    <div className="tracking-widest h-full max-w-full px-6 md:px-20 2xl:px-60 bg-glacier font-quicksand">
      <h1 className="p-4 text-base text-center text-white font-bold sm:p-8 sm:text-3xl md:p-8 md:text-4xl lg:p-10 lg:text-6xl">
        HOW MUCH WILL YOUR PET(S) <br /> ROUGHLY COST THIS YEAR?
      </h1>
      <Main />
      <h1 className="p-2 text-sm text-center text-white font-bold sm:p-2 sm:text-1xl lg:p-4 lg:text-2xl">
        MADE WITH LOVE BY ASHLEY
      </h1>
    </div>
  );
}

export default App;
