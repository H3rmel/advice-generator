// React JS
import React from "react";
import ReactDOM from "react-dom/client";

// Main CSS
import "./index.css";

// App
import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
