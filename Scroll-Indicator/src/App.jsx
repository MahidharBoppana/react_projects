import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ScrollIndiactor from "./components/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ScrollIndiactor getUrl={"https://dummyjson.com/products?limit=100"} />
    </>
  );
}

export default App;
