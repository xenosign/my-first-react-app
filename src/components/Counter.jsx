import { useState } from "react";

function Counter() {
  let [state, setState] = useState(0);

  return (
    <div className="App">
      {state}
      <br />
      <button
        onClick={() => {
          setState((state += 1));
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setState((state -= 1));
        }}
      >
        -1
      </button>
    </div>
  );
}

export default Counter;
