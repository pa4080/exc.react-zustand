import React, { useRef } from "react";

const Counter: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const count = 0;

  return (
    <div className="counter-container">
      <h2>
        Count is <b>{count}</b>
      </h2>

      <div className="button-container">
        <div className="button-row">
          <button onClick={() => {}}>Increment</button>
          <button onClick={() => {}}>Decrement</button>
        </div>
        <div className="button-row">
          <input id="amount" type="number" ref={inputRef} defaultValue={10} />
        </div>
        <div className="button-row">
          <button onClick={() => {}}>Increment by amount</button>
          <button onClick={() => {}}>Increment by amount Async</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
