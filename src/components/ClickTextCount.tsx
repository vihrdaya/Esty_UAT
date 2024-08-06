import { useState } from "react";

interface ClickTextCountProps {
  myCount: number;
}

const ClickTextCount: React.FC<ClickTextCountProps> = ({ myCount }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + myCount)}>
        <p>Count: {count}</p>
      </button>
    </div>
  );
};

export default ClickTextCount;
