import { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="first">
      <div className="second">
        <div className="third">Basic Calaulator</div>
        <div className="fourth">{input || ["0"]}</div>
        <div className="fifth">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"].map((btn) => (
            <button
              key={btn}
              className="sixth"
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
