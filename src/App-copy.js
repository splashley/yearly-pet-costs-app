import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-glacier py-10 px-32 h-screen font-quicksand">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
