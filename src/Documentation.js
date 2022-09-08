import React from "react";
import Counter, { useCounter } from "./Components/Counter";

function Documentation() {
  const { count, setMore } = useCounter(0);
  return (
    <>
      <h1>Boilerplate documentation examples</h1>
      <section>
        <h2>Components</h2>
        <section>
          <h3>Counter</h3>
          <section>
            <h4>Demo</h4>
            <div className="demo">
              <Counter count={count} onMore={setMore} />
            </div>
          </section>
          <section>
            <h4>How use ?</h4>
            <p className="code">
              {`import Counter, { useCounter } from 'mylib/Counter'`}
              <br />
              {`function Example(){`}
              <br />
              {`const { count, setMore } = useCounter(0)`}
              <br />
              {`return <Counter count={count} onMore={setMore}/>`}
              <br />
              {`}`}
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default Documentation;
