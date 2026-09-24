import "../css/Window.css";
import "../css/InventoryScreen.css";
import WindowControls from "./WindowControls";

const ITEMS = [
  {
    id: "jeuxvideo",
    icon: "🎮",
    title: "Jeux vidéo & culture web",
    note: "Une passion de toujours, qui nourrit ma créativité, ma logique et mes réflexes. Une inspiration également dans mon approche du web et l'UI design.",
    rarity: "epic",
  },
  {
    id: "gamejams",
    icon: "🧩",
    title: "Game jams",
    note: "Participation à des games jams à distance et en présentiel. C'est là que j'ai appris le pixel art et l'animation — aujourd'hui je dessine mes propres visuels pour mes productions web.",
    link: "https://offichigo.itch.io/",
    linkLabel: "offichigo.itch.io ↗",
    rarity: "rare",
  },
  {
    id: "cinema",
    icon: "🎬",
    title: "Filmer, cadrer & monter",
    note: " Passion d'enfance qui m'a amenée à obtenir un Master cinéma et audiovisuel : j'aime filmer, réaliser, cadrer, monter. J'ai eu l'occasion de participer à des tournages professionnels et de réaliser des courts métrages. J'aime aussi faire des montages fan-made autour de films, séries ou personnages que j'adore. ",
    rarity: "rare",
  },
  {
    id: "manuel",
    icon: "🧵",
    title: "Activités manuelles",
    note: "Coloriage, peinture, puzzle — pour couper les écrans et se détendre autrement.",
    rarity: "common",
  },
  {
    id: "sport",
    icon: "🚴",
    title: "Sport",
    note: "Aquabike, piscine, vélo — pour garder l'esprit clair entre deux sessions de code.",
    rarity: "common",
  },
];

function InventoryScreen({ onNext }) {
  return (
    <div className="inventory-screen">
      <div className="title-window inventory-window">
        <div className="character-bar">
          <span>inventaire.exe</span>
          <WindowControls />
        </div>

        <div className="inventory-body">
          <h2 className="inventory-heading">🎒 Sac à dos d'aventurière</h2>
          <p className="inventory-subheading">
            Les objets qui inspirent Off en dehors du code.
          </p>

          <div className="inventory-grid">
            {ITEMS.map((item) => (
              <div
                key={item.id}
                className={`inventory-item inventory-item--${item.rarity}`}
              >
                <div className="inventory-item-icon">{item.icon}</div>
                <p className="inventory-item-title">{item.title}</p>
                <p className="inventory-item-note">{item.note}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inventory-item-link"
                  >
                    {item.linkLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="next-btn" onClick={onNext}>
        Contact ▶
      </button>
    </div>
  );
}

export default InventoryScreen;
