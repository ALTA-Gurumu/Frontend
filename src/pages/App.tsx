import { useState } from "react";
import reactLogo from "../assets/react.svg";
import "../styles/App.css";
import Login from "./auth/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
    </>
  );
}

export default App;
