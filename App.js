import React from "react";
import { createRoot } from "react-dom/client";

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// div with class “title”)

// header>div>h1,h2,h3

const header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "Heading 1"),
  React.createElement("h2", {}, "Heading 2"),
  React.createElement("h3", {}, "Heading 3"),
]);

const addon = () => <h1 className="Header"> Functional compoenent</h1>;

const JSXheader = () => {
  return (
    <div>
      {addon()}
      <h1>Heading 1 from JSX</h1>
      <h2>Heading 2 from JSX</h2>
      <h3>Heading 3 from JSX</h3>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<JSXheader />);
