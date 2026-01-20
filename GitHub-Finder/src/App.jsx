import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GitHubProfileFinder from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GitHubProfileFinder />
    </>
  );
}

export default App;
