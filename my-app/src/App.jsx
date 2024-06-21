import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import ImageUploader from "./ImageUploader";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <h1>Test API reconocimiento facil</h1>
      <div className="card">
        <ImageUploader/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
