import { useEffect, useState } from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";
import WelcomeScreen from "./welcome"; 
import "./App.css"

function App() {
  const [label, setLabel] = useState(null);

  useEffect(() => {
    setLabel(getCurrentWindow().label);
  }, []);

  if (!label) return null; 

  if (label === "splashscreen") {
    return <WelcomeScreen />;
  }

  return (
    <div className="main-app">
       <h1>Meu App de Notas (Main)</h1>
    </div>
  );
}

export default App;