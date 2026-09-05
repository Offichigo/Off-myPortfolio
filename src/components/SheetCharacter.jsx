import "../css/Window.css";

function SheetCharacter({ compact = false }) {
  if (compact) {
    return (
      <div className="sheet-compact">
        <p className="sheet-character">Ophélie "Off" Perianin</p>
        <p className="sheet-sub">Développeuse Full Stack en devenir</p>
        <p className="sheet-sub">📍 Nantes</p>
      </div>
    );
  }

  return (
    <div className="title-window">
      <div className="character-bar">
        <span>joueuse.exe</span>
      </div>
      <div className="title-content sheet-perso">
        <span className="sheet-character">Ophélie "Off" Perianin</span>
        <span className="sheet-character">
          Développeuse Full Stack en devenir
        </span>
        <span>Nantes</span>
      </div>
    </div>
  );
}

export default SheetCharacter;
