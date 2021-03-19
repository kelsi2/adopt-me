import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    // We can pass arguments here (id, class, etc.)
    {},
    [
      React.createElement("h1", { id: "something-important" }, "Adopt Me!"),
      // No attributes or children, these are optional
      React.createElement(Pet, {
        name: "Hermione",
        animal: "Cat",
        breed: "Domestic short-hair",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel",
      }),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      }),
    ]
  );
};

// We imported render so don't need to say ReactDOM.render
render(React.createElement(App), document.getElementById("root"));
