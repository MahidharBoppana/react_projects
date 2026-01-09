import { useState } from "react";
import "./App.css";
import ColorButtons from "./components/colorButtons";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <ColorButtons setColor={setColor} />
    </div>
  );
}

export default App;
