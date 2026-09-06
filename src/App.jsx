import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ContactCard from "./components/ContactCard";
import TitleScreen from "./components/TitleScreen";
import CharacterScreen from "./components/CharacterScreen";
import SkillTree from "./components/SkillTree";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("title");

  return (
    <div className="app-container">
      {screen === "title" ? (
        <TitleScreen onStart={() => setScreen("character")} />
      ) : (
        <div className="app-layout">
          <div className="app-sidebar-col">
            <Sidebar activeScreen={screen} onNavigate={setScreen} />
            <ContactCard />
          </div>
          <div className="app-content">
            {screen === "character" && (
              <CharacterScreen onNext={() => setScreen("skills")} />
            )}
            {screen === "skills" && (
              <SkillTree onNext={() => setScreen("quests")} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
