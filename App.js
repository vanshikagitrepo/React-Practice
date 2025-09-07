import React from "react";
import {createRoot} from "react-dom/client";


const heading = React.createElement("h1", {}, "hogaya!!");

const heading2 = React.createElement("h2", {}, "Jai shree Ram !");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [heading, heading2]),
]);
const root = createRoot(document.getElementById("root"));
root.render(parent);


