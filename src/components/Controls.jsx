import React from "react";
import AddButton from "./AddButton";
import Colors from "./Colors";
import colors from "../assets/colors-data.json";
const Controls = (width) => {
  console.log(width);
  return (
    <div id="controls">
      <AddButton />
      {colors.map((color) => (
        <Colors key={color.id} color={color} />
      ))}
    </div>
  );
};

export default Controls;
