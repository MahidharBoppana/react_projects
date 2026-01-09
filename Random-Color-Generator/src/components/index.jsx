import { useEffect, useState } from "react";
import "./style.css";

export default function RandomColorGenerator(params) {
  const [typeOfColor, setTypeOfColor] = useState("");
  const [color, setColor] = useState("#2C1A66");

  function handleCreateHexColor() {
    let hexValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * hexValues.length);
      hexColor += hexValues[index];
    }

    setColor(hexColor);
  }

  function handleCreateRgbColor(params) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgb = `rgb(${r},${g},${b})`;

    setColor(rgb);
  }

  useEffect(() => {
    if (typeOfColor === "hex") {
      handleCreateHexColor();
    } else {
      handleCreateRgbColor();
    }
  }, [typeOfColor]);

  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "40px",
        color: "white",
        textAlign: "center",
      }}
    >
      <div className="color-display">
        <h2>{typeOfColor + " " + "color"}</h2>
        <h1>{color}</h1>
      </div>
      <div className="buttons">
        <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor("rbg")}>Create Rgb Color</button>
        <button
          onClick={
            typeOfColor === "hex" ? handleCreateHexColor : handleCreateRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
    </div>
  );
}
