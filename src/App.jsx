import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ContactCard from "./components/ContactCard";
import TitleScreen from "./components/TitleScreen";
import CharacterScreen from "./components/CharacterScreen";
import SkillTree from "./components/SkillTree";
import QuestsScreen from "./components/QuestsScreen";
import ProgressScreen from "./components/ProgressScreen";
import "./App.css";
import InventoryScreen from "./components/InventoryScreen";
import ContactScreen from "./components/ContactScreen";

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
            {screen === "quests" && (
              <QuestsScreen onNext={() => setScreen("progress")} />
            )}
            {screen === "progress" && (
              <ProgressScreen onNext={() => setScreen("inventory")} />
            )}
            {screen === "inventory" && (
              <InventoryScreen onNext={() => setScreen("contact")} />
            )}
            {screen === "contact" && <ContactScreen />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
