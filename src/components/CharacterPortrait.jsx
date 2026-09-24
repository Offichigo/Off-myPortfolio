import "../css/Window.css";
import WindowControls from "./WindowControls";
import portraitImg from "../assets/off_portrait.png";

function CharacterPortrait() {
  return (
    <div className="title-window">
      <div className="character-bar">
        <span>portrait.exe</span>
        <WindowControls />
      </div>
      <div className="portrait-body">
        <div className="portrait-frame">
          <img
            src={portraitImg}
            alt="Ophélie Off Perianin, portrait pixel art"
            className="portrait-img"
          />
        </div>
      </div>
    </div>
  );
}

export default CharacterPortrait;
