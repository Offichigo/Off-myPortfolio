import "../css/Window.css";
import WindowControls from "./WindowControls";
// import portraitImg from "../assets/off_portrait.png"; // à activer une fois le dessin prêt

function CharacterPortrait() {
  return (
    <div className="title-window">
      <div className="character-bar">
        <span>portrait.exe</span>
        <WindowControls />
      </div>
      <div className="portrait-body">
        <div className="portrait-frame">
          {/* Remplace ce placeholder par : <img src={portraitImg} alt="Ophélie Off Perianin, portrait pixel art" /> */}
          <span className="portrait-placeholder">🎨</span>
        </div>
        <p className="portrait-note">Portrait pixel art — à venir</p>
      </div>
    </div>
  );
}

export default CharacterPortrait;
