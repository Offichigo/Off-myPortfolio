import "../css/Window.css";
function WindowControls() {
  return (
    // Décoratifs pour l'instant : masqués aux lecteurs d'écran
    <div className="window-controls" aria-hidden="true">
      <span className="window-btn window-btn--min" />
      <span className="window-btn window-btn--max" />
      <span className="window-btn window-btn--close">×</span>
    </div>
  );
}

export default WindowControls;
