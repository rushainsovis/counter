import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Counter App</h1>
      <p data-testid="count">Count: {count}</p>
      <button onClick={() => setCount(count + 1)} data-testid="increment">
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} data-testid="decrement">
        Decrement
      </button>
    </div>
  );
}

export default App;