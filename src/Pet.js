import React from "react";

// Using props to pass from parent (App)
// into child component (Pet)
// Can only go down from parent to child component
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

export default Pet;
