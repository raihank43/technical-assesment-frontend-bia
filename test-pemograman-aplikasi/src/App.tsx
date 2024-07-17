import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount((count) => count + 1)}>Increment</Button>
      <Button onClick={() => setCount((count) => count - 1)}>Decrement</Button>
      <div>
        <img src={reactLogo} alt="React Logo" />
        <img src={viteLogo} alt="Vite Logo" />
      </div>
      <div>Count: {count}</div>
    </>
  );
}

export default App;
