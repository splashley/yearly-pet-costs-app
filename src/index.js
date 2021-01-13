import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserInfoContextProvider } from "./UserInfoContext";

ReactDOM.render(
  <React.StrictMode>
    <UserInfoContextProvider>
      <App />
    </UserInfoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
