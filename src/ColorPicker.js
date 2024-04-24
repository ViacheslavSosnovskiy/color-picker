import { useState } from "react";
import classNames from "classnames";
import "./ColorPicker.css";

const colorOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "indigo", color: "#3F51B5" },
];

const ColorPicker = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { label } = colorOptions[activeIndex];

  const makeOptionClassName = (index) => {
    return classNames("ColorPicker", {
      ColorPicker__active: index === activeIndex,
    });
  };

  return (
    <>
      <h3>Selected color: {label}</h3>
      {colorOptions.map(({ label, color }, index) => (
        <button
          key={label}
          className={makeOptionClassName(index)}
          style={{ backgroundColor: color }}
          onClick={() => setActiveIndex(index)}
        >
          😽
        </button>
      ))}
    </>
  );
};

export default ColorPicker;
