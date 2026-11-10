import { useEffect, useState } from "react";
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

  // À chaque changement d'écran, on remonte en haut de la page (utile sur mobile)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen]);

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
          <main className="app-content">
            {/* Titre principal pour les lecteurs d'écran (invisible à l'écran) */}
            <h1 className="visually-hidden">
              Portfolio d'Ophélie « Off » Perianin, développeuse web junior
            </h1>
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
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
