import { useState } from "react";
import TitleScreen from "./components/TitleScreen";
import CharacterScreen from "./components/CharacterScreen";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("title");

  return (
    <div className="app-container">
      {screen === "title" && (
        <TitleScreen onStart={() => setScreen("character")} />
      )}
      {screen === "character" && <CharacterScreen />}
    </div>
  );
}

export default App;
