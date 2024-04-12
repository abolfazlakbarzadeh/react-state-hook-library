import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.tsx";
import SecondPage from "./pages/second.tsx";
import { withReactHook } from "./helpers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={withReactHook(HomePage)} />
        <Route
          path="/second"
          Component={withReactHook(SecondPage, {
            initialState: { items: [], stateKey: "State value" },
          })}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
