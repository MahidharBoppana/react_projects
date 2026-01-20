import QRCode from "react-qr-code";
import { useState } from "react";

export default function QrCode() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Enter a value"
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button
        onClick={handleGenerateQrCode}
        disabled={input && input.trim() !== "" ? false : true}
      >
        Generate
      </button>

      <QRCode value={qrCode} size={200} color="#fff" id="qr-code-value" />
    </div>
  );
}
