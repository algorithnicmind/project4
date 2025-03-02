
import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use createRoot
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/App.css"; // Ensure this file exists

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use createRoot
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
