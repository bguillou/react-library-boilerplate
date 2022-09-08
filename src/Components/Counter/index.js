import React, { useState } from "react";

export function useCounter(defaultCount = 0) {
  const [count, setCount] = useState(defaultCount);

  const setMore = () => {
    setCount(count + 1);
  };

  return { count, setMore };
}

export default function Counter({ count = 0, onMore = () => {} }) {
  return (
    <section style={{ display: "flex" }}>
      <h6 style={{ marginRight: 10 }}>{count}</h6>
      <button onClick={onMore}>One more</button>
    </section>
  );
}
