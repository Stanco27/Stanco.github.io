import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/Stanco.github.io/">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
