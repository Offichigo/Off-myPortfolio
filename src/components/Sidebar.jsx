import { useEffect, useState } from "react";
import "../css/Sidebar.css";
import WindowControls from "./WindowControls";

const NAV_ITEMS = [
  { id: "character", label: "Fiche de personnage", icon: "💖" },
  { id: "skills", label: "Compétences", icon: "🌳" },
  { id: "quests", label: "Quêtes", icon: "⚔️" },
  { id: "progress", label: "Progression", icon: "📈" },
  { id: "inventory", label: "Inventaire", icon: "🎒" },
  { id: "contact", label: "Contact", icon: "✉️" },
];

// Sur ordinateur : fenêtre MENU à gauche.
// Sous 768 px : barre des tâches façon Win95, le bouton « Démarrer » ouvre ce même menu.
function Sidebar({ activeScreen, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Échap ferme le menu mobile
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const handleNavigate = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  const current = NAV_ITEMS.find((item) => item.id === activeScreen);

  return (
    <>
      {menuOpen && (
        <div
          className="start-menu-backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        id="menu-principal"
        className={`sidebar-window ${menuOpen ? "sidebar-window--open" : ""}`}
      >
        <div className="sidebar-bar">
          <span>MENU</span>
          <WindowControls />
        </div>
        <nav className="sidebar-nav" aria-label="Navigation principale">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`sidebar-item ${activeScreen === item.id ? "active" : ""}`}
              aria-current={activeScreen === item.id ? "page" : undefined}
              onClick={() => handleNavigate(item.id)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
          <a
            href="/cv-off-perianin.pdf"
            download="cv-off-perianin.pdf"
            className="sidebar-item sidebar-cv"
            onClick={() => setMenuOpen(false)}
          >
            <span className="sidebar-icon">📄</span>
            Télécharger mon CV (PDF)
          </a>
        </nav>
      </div>

      <div className="taskbar">
        <button
          className="taskbar-start"
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">🌱</span>
          Démarrer
        </button>
        {current && (
          <span className="taskbar-current">
            <span aria-hidden="true">{current.icon}</span>
            {current.label}
          </span>
        )}
      </div>
    </>
  );
}

export default Sidebar;
