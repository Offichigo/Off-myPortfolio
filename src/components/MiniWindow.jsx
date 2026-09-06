import "../css/Window.css";
import WindowControls from "./WindowControls";

function MiniWindow({ title, children }) {
  return (
    <div className="title-window">
      <div className="character-bar">
        <span>{title}</span>
        <WindowControls />
      </div>
      <div className="mini-window-body">{children}</div>
    </div>
  );
}

export default MiniWindow;
