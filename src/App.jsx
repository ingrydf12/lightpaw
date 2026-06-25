import { useEffect, useState } from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { listen } from "@tauri-apps/api/event";
import WelcomeScreen from "./welcome";
import LandingLightpawScreen from "./screens/initialScreen";

import "./App.css";

function App() {
  const [label, setLabel] = useState(null);
  const [mainScreen, setMainScreen] = useState("placeholder");

  useEffect(() => {
    setLabel(getCurrentWindow().label);
  }, []);

  useEffect(() => {
    if (label !== "main") return;

    const unlistenPromise = listen("navigate", (event) => {
      setMainScreen(event.payload);
    });

    return () => {
      unlistenPromise.then((unlisten) => unlisten());
    };
  }, [label]);

  if (!label) return null;

  if (label === "splashscreen") {
    return <WelcomeScreen />;
  }

  if (mainScreen === "landing") {
    return <LandingLightpawScreen />;
  }

  return (
    <div className="main-app">
      <h1>Meu App de Notas (Main)</h1>
    </div>
  );
}

export default App;