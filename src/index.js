import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import StateIndividuel from "./components/StateIndividuel/StateIndividuel";
import StateObjet from "./components/StateObjet/StateObjet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <StateObjet />
    <br />
    <br />
    <br />
    <StateIndividuel />
  </>
);
