import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./Login";
import "./style1.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="g-signin">
      <Login />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
