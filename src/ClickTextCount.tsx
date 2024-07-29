import { useState } from "react";

function ClickTextCount({ myCount }: { myCount: number }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + myCount)}>
        <p>Count: {count}</p>
      </button>
    </div>
  );
}

export default ClickTextCount;
