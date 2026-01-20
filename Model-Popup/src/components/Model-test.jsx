import { useState } from "react";
import ModelPopup from "./Model-Popup";
import "./Model-Style.css";

export default function ModelTest() {
  const [showModelPopup, setShowModelPopup] = useState(false);

  function handleTogglePopup() {
    setShowModelPopup(!showModelPopup);
  }

  function onClose() {
    setShowModelPopup(false);
  }

  return (
    <div>
      <button onClick={handleTogglePopup}>Open model popup</button>
      {showModelPopup && <ModelPopup onClose={onClose} />}
    </div>
  );
}
