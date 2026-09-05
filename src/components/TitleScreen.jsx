import "../css/Window.css";
import "../css/TitleScreen.css";
import sprootAvatar from "../assets/sproot_avatar.png";
import SheetCharacter from "./SheetCharacter";
import WindowControls from "./WindowControls";

function TitleScreen({ onStart }) {
  return (
    <div className="title-window">
      <div className="title-bar">
        <span>portfolio — OFF.exe</span>
        <WindowControls />
      </div>

      <div className="home-scene">
        <div className="home-corner home-corner--top-left">
          <SheetCharacter compact />
        </div>

        <div className="home-corner home-corner--top-right">
          <p className="home-status-label">⭐ Disponible</p>
          <p>recherche alternance</p>
          <p className="home-status-date"> janvier 2027</p>
        </div>

        <div className="home-hero">
          <h1>OFF.exe</h1>
          <p className="home-subtitle">Portfolio interactif</p>

          <div className="home-bubble">
            Hey, moi c'est Sprout ! Je vais te guider dans l'univers d'Off.
            Prêt·e à explorer son parcours comme dans un vrai RPG ?
          </div>

          <img
            src={sprootAvatar}
            alt="Sprout, personnage pixel art compagnon"
            className="sproot-avatar"
          />

          <div className="new-game-panel">
            <p className="new-game-title">Nouvelle partie</p>
            <p className="new-game-level">
              🌱 Statut : En pleine montée de compétences
            </p>
            <p className="new-game-class">Classe : Développeuse Full Stack</p>

            <button className="start-btn" onClick={onStart}>
              Entrer dans l'aventure →
            </button>
          </div>
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
