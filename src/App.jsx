import { useState } from "react";

import "./App.css";
import "./header.jsx";
import "./button.jsx";
import "./card.jsx";
import Header from "./header.jsx";
import Card from "./card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" h-screen bg-blue-100 flex flex-col items-center justify-center">
      <Card />
    </div>
  );
}

export default App;
