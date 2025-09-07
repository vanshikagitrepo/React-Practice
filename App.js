const heading = React.createElement("h1", {}, "Hello world from React !!");

const heading2 = React.createElement("h2", {}, "Jai shree Ram !");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [heading, heading2]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
