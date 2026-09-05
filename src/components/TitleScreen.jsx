import "../css/Window.css";
import "../css/TitleScreen.css";
import sprootAvatar from "../assets/sproot_avatar.png";
import SheetCharacter from "./SheetCharacter";

function TitleScreen({ onStart }) {
  return (
    <div className="title-window">
      <div className="title-bar">
        <span>portfolio — OFF.exe</span>
      </div>

      <div className="home-scene">
        <div className="home-corner home-corner--top-left">
          <SheetCharacter compact />
        </div>

        <div className="home-corner home-corner--top-right">
          <p className="home-status-label">Disponible</p>
          <p className="home-status-text">recherche alternance</p>
          <p className="home-status-date">janvier 2027</p>
        </div>

        <div className="home-hero">
          <h1>OFF.exe</h1>
          <p className="home-subtitle">Portfolio interactif</p>
          <div className="home-bubble">
            Bienvenue dans mon univers ! Prépare-toi à explorer mon parcours
            comme dans un RPG.
          </div>
          <img
            src={sprootAvatar}
            alt="Sprout, personnage pixel art compagnon"
            className="sproot-avatar"
          />
          <button className="start-btn" onClick={onStart}>
            Start →
          </button>
        </div>

        <div className="home-corner home-corner--bottom-left">
          <p className="home-corner-title">Statut</p>
          <p>💗 Motivée</p>
          <p>⭐ Curieuse</p>
          <p>🌱 Créative</p>
        </div>

        <div className="home-corner home-corner--bottom-right">
          <p className="home-corner-title">Équipement</p>
          <p>💻 Ordinateur portable</p>
          <p>📝 Bloc-notes</p>
          <p>🌱 Sprout compagnon</p>
        </div>
      </div>
    </div>
  );
}

export default TitleScreen;
