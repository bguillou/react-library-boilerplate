import React, { useState } from "react";

export function useCounter(defaultCount = 0) {
  const [count, setCount] = useState(defaultCount);
  const setMore = () => {
    setCount(count + 1);
  };
  return { count, setMore };
}

export default function Counter({ count = 0, handleMore = () => {} }) {
  return (
    <section>
      <h6>{count}</h6>
      <button onClick={handleMore}>One more</button>
    </section>
  );
}
