import "../css/Window.css";
import "../css/TitleScreen.css";
import "../css/CharacterScreen.css";
import WindowControls from "./WindowControls";
import MiniWindow from "./MiniWindow";
import CharacterPortrait from "./CharacterPortrait";

function CharacterScreen({ onNext }) {
  return (
    <div className="character-screen">
      <div className="character-main-col">
        <div className="title-window">
          <div className="character-bar">
            <span>fiche-de-personnage.exe</span>
            <WindowControls />
          </div>

          <div className="title-sheet">
            <div className="sheet-field">
              <p className="sheet-label">Nom du personnage</p>
              <div className="sheet-value-box">
                <span>Ophélie "Off" Perianin</span>
                <span className="sheet-icon">💗</span>
              </div>
            </div>

            <div className="sheet-field">
              <p className="sheet-label">Zone de départ</p>
              <div className="sheet-value-box">
                <span>Nantes</span>
                <span className="sheet-icon">🏰</span>
              </div>
            </div>

            <div className="sheet-field">
              <p className="sheet-label">Classe actuelle</p>
              <div className="sheet-value-box">
                <span>
                  Conceptrice Développeuse d'Applications (en formation)
                </span>
                <span className="sheet-icon">💻</span>
              </div>
            </div>

            <div className="sheet-field">
              <p className="sheet-label">Quête principale</p>
              <div className="sheet-value-box">
                <span>Devenir développeuse web full stack</span>
                <span className="sheet-icon">⚔️</span>
              </div>
            </div>

            <div className="sheet-field">
              <p className="sheet-label">🕯️ Bio</p>
              <div className="sheet-bio-box">
                <p>
                  Après plusieurs quêtes secondaires dans la restauration, le
                  nettoyage, l'éducation, Off débloque en 2013 la compétence
                  "Reprise d'études". Cette décision lui permet d'obtenir un
                  DAEU, puis une licence et un master en cinéma et audiovisuel.
                </p>
                <p>
                  Quelques années plus tard, elle rejoint la guilde des
                  conseillers numériques avant d'évoluer vers le rôle
                  d'animatrice numérique. Son aventure a toujours été guidée par
                  les mêmes objectifs : apprendre, créer et rendre les outils
                  plus accessibles.
                </p>
                <p>
                  Aujourd'hui, une nouvelle quête est en cours : maîtriser le
                  développement web et construire des expériences utiles,
                  inclusives et créatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="character-side-col">
        <CharacterPortrait />

        <MiniWindow title="skills.exe">
          ✨ Curiosité
          <br />
          🎨 Créativité
          <br />
          🔍 Résolution de problèmes
          <br />
          🌱 Adaptabilité
          <br />⚡ Persévérance
        </MiniWindow>

        <MiniWindow title="🩷 love.exe">
          🎮 Jeux vidéo
          <br />
          🎬 Cinéma
          <br />
          🐱 Chats
          <br />
          💻 Développement web
        </MiniWindow>
        <button className="next-btn" onClick={onNext}>
          Continuer ▶
        </button>
      </div>
    </div>
  );
}

export default CharacterScreen;
