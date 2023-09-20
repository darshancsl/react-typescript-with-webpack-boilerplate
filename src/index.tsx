import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/style.css";

const rootElement: HTMLDivElement = document.querySelector("#root")!;
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
