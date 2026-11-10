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
          <p className="home-status-label">⭐ Disponible dès maintenant</p>
          <p>poste de développeuse web junior</p>
          <p className="home-status-date">🏠 Nantes ou full remote</p>
        </div>

        <div className="home-hero">
          <h1>OFF.exe</h1>
          <p className="home-subtitle">Portfolio interactif</p>

          <div className="home-bubble">
            Prêt·e à explorer le parcours d'Off comme dans un vrai RPG ?
          </div>

          <img
            src={sprootAvatar}
            alt="Sprout, personnage pixel art compagnon"
            className="sproot-avatar"
          />

          <div className="new-game-panel">
            <p className="new-game-title">Nouvelle partie</p>
            <p className="new-game-level">
              🌱 Statut : Titre CDA obtenu · RNCP 6
            </p>
            <p className="new-game-class">
              Classe : Développeuse web full stack junior
            </p>

            <div className="new-game-actions">
              <button className="start-btn" onClick={onStart}>
                Entrer dans l'aventure ▶
              </button>
              <a
                href="/cv-off-perianin.pdf"
                download="cv-off-perianin.pdf"
                className="cv-download-btn"
              >
                📄 Télécharger mon CV (PDF)
              </a>
            </div>
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
