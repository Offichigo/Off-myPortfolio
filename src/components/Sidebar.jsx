import "../css/Sidebar.css";
import WindowControls from "./WindowControls";

const NAV_ITEMS = [
  { id: "character", label: "Fiche de personnage", icon: "👩🏻" },
  { id: "skills", label: "Compétences", icon: "🌳" },
  { id: "quests", label: "Quêtes", icon: "⚔️" },
  { id: "progress", label: "Progression", icon: "📈" },
  { id: "inventory", label: "Inventaire", icon: "🎒" },
  { id: "contact", label: "Contact", icon: "✉️" },
];

function Sidebar({ activeScreen, onNavigate }) {
  return (
    <div className="sidebar-window">
      <div className="sidebar-bar">
        <span>MENU</span>
        <WindowControls />
      </div>
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`sidebar-item ${activeScreen === item.id ? "active" : ""}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
