import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ModelTest from "./components/Model-test.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ModelTest />
    </>
  );
}

export default App;
