import { useEffect, useState } from "react";
import "./App.css";

function Stopwatch() {
  const [value, setValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervelId;
    if (isRunning) {
      intervelId = setInterval(() => {
        setValue((pre) => pre + 1);
      }, 10);
    }
    return () => clearInterval(intervelId);
  }, [isRunning]);

  const hours = Math.floor(value / 360000);

  const minutes = Math.floor((value % 360000) / 6000);

  const seconds = Math.floor((value % 6000) / 100);

  const milliseconds = value % 100;

  const handleClick = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setValue(0);
  };
  return (
    <>
      <div className="stop">
        <div>You Can Stop the World...!😅</div>
      </div>
      <div
        className="main-box"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p className="para">
          {hours}:{minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milliseconds.toString().padStart(2, "0")}
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={handleClick}
          style={{
            outline: "none",
            fontSize: "16px",
            fontWeight: "600",
            border: "1px solid black",
            borderRadius: "8px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          onClick={reset}
          style={{
            outline: "none",
            fontSize: "16px",
            fontWeight: "600",
            marginLeft: "20px",
            border: "1px solid black",
            borderRadius: "8px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default Stopwatch;
