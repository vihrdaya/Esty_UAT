import { useState } from "react";
import ClickTextCount from "./ClickTextCount";

function TextCountBox() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setCount(e.target.value.length);
        }}
      />
      <p>text: {text}</p>
      <p>count: {count}</p>

      <ClickTextCount myCount={count} />
    </div>
  );
}

export default TextCountBox;
