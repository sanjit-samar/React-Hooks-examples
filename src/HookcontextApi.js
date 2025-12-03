import "./styles.css";
import { createContext, useState } from "react";
import { useContext } from "react";

export const colorContext = createContext();

export default function HookcontextApi() {
  const [color, setColor] = useState("red");

  return (
    <div className="App">
      <colorContext.Provider value={color}>
        <Color />
      </colorContext.Provider>
      <button onClick={() => setColor("Blue")}>Blue</button>
      <button onClick={() => setColor("Green")}>Green</button>
    </div>
  );
}

function Color() {
  const data = useContext(colorContext);

  return (
    <div className="App">
      <p>color context value - {data}</p>
    </div>
  );
}
