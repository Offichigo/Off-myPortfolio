import "../css/Window.css";
import "../css/TitleScreen.css";

function TitleScreen({ onStart }) {
  return (
    <div className="title-window">
      <div className="title-bar">
        <span>portfolio — OFF.exe</span>
      </div>
      <div className="title-content">
        <span className="badge">Recherche alternance • Janvier 2027</span>
        <h1>Ophélie "Off" Perianin</h1>
        <p>Développeuse Full Stack en devenir</p>
        <button className="start-btn" onClick={onStart}>
          Start →
        </button>
      </div>
    </div>
  );
}

export default TitleScreen;
