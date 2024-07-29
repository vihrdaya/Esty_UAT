import { useState } from "react";
import "./App.css";
import Message from "./Message";
import TextCountBox from "./TextCountBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Message />

      <TextCountBox />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
