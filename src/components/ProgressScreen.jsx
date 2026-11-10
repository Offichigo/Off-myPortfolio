import "../css/Window.css";
import "../css/ProgressScreen.css";
import WindowControls from "./WindowControls";

const CAREER = [
  {
    id: "assistante",
    title: "Assistante d'éducation",
    place: "Lycée Polyvalent Stanislas, Nancy",
    date: "Janv. 2018 – Sept. 2021",
    color: "pink",
  },
  {
    id: "conseillere",
    title: "Conseillère numérique",
    place: "Mission locale du Grand Nancy",
    date: "Juin 2022 – Sept. 2023",
    color: "lavender",
  },
  {
    id: "animatrice",
    title: "Animatrice numérique",
    place: "ATDEC, Nantes",
    date: "Oct. 2023 – Nov. 2026",
    color: "blue",
  },
  {
    id: "dev",
    title: "Stage développeuse web full stack",
    place: "GitQuest, Nantes · full remote",
    date: "Sept. – Oct. 2026",
    color: "green",
  },
];

const FORMATIONS = [
  {
    title: "Licence en études culturelles",
    place: "Université de Lorraine",
    date: "2017",
  },
  { title: "Master cinéma et audiovisuel", place: "IECA", date: "2019" },
  {
    title: "Titre pro Responsable espace médiation numérique",
    place: "Cefiac",
    date: "2023",
  },
  {
    title: "Titre pro CDA · RNCP 6 (bac+3)",
    place: "Ada Tech School",
    date: "2026",
  },
];

function ProgressScreen({ onNext }) {
  return (
    <div className="progress-screen">
      <div className="title-window progress-window">
        <div className="character-bar">
          <span>progression.exe</span>
          <WindowControls />
        </div>

        <div className="progress-body">
          <h2 className="progress-heading">📈 Ma progression</h2>

          {/* Timeline expérience */}
          <div className="timeline">
            {CAREER.map((step, i) => (
              <div
                key={step.id}
                className={`timeline-step timeline-step--${step.color}`}
              >
                <div className="timeline-dot" />
                {i < CAREER.length - 1 && <div className="timeline-line" />}
                <div className="timeline-content">
                  <p className="timeline-title">{step.title}</p>
                  <p className="timeline-place">{step.place}</p>
                  <p className="timeline-date">{step.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Formations */}
          <h3 className="formations-heading">🎓 Formations</h3>
          <div className="formations-list">
            {FORMATIONS.map((f) => (
              <div key={f.title} className="formation-item">
                <span className="formation-icon">📜</span>
                <div className="formation-text">
                  <p className="formation-title">{f.title}</p>
                  <p className="formation-place">{f.place}</p>
                </div>
                <span className="formation-date">{f.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="next-btn" onClick={onNext}>
        Inventaire ▶
      </button>
    </div>
  );
}

export default ProgressScreen;
