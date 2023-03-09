import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
    </div>
  );
};

export default App;
