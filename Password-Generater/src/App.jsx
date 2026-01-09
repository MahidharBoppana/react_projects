import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed) string += "0123456789";
    if (charAllowed) string += "!@#$%^&*()_-+={}[]|:;'<>,.?/";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * string.length + 1);
      password += string.charAt(index);
    }

    setPassword(password);
  }, [length, charAllowed, numbersAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numbersAllowed]);

  const passwordref = useRef(null);

  const copyToClipBoard = () => {
    window.navigator.clipboard.writeText(password);
    passwordref.current.select();
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="outline-none w-full py-1 px-3 bg-white"
            ref={passwordref}
          />
          <button
            onClick={copyToClipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
              name=""
              id=""
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbersAllowed}
              onChange={(e) => setNumbersAllowed((prev) => !prev)}
              name=""
              id=""
            />
            <label htmlFor="numbers">Allow Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={(e) => setCharAllowed((prev) => !prev)}
              name=""
              id=""
            />
            <label htmlFor="characters">Allow Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
