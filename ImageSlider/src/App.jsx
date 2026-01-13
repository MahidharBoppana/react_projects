import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageSlider from "./components/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ImageSlider url={"https://picsum.photos/v2/list"} />
    </>
  );
}

export default App;
