import "../css/Window.css";
import "../css/SkillTree.css";
import WindowControls from "./WindowControls";

const BRANCHES = [
  {
    id: "dev",
    title: "🌿 Dev",
    color: "green",
    skills: [
      "Manipulation du DOM",
      "Gestion de versions Git",
      "Fetch/API /Open data",
      "Gestion de base de donnée",
      "Manipulation du DOM",
      "Tests unitaires",
    ],
  },
  {
    id: "outils",
    title: "🛠️ Outils & process",
    color: "blue",
    skills: ["Notion", "Jira", "Méthode Agile", "Figma", "Trello", "Canva"],
  },
  {
    id: "crea",
    title: "🎨 Créa",
    color: "pink",
    skills: [
      "Outils graphiques",
      "Création de contenus visuels",
      "UI / UX",
      "Pixel art",
      "Montage vidéo",
    ],
  },
  {
    id: "soft",
    title: "💬 Soft skills",
    color: "amber",
    skills: [
      "Travail en équipe",
      "Pédagogie numérique",
      "Autonomie",
      "Curiosité",
      "Persévérance",
    ],
  },
];

function SkillTree({ onNext }) {
  return (
    <div className="skill-screen">
      <div className="title-window skill-window">
        <div className="character-bar">
          <span>compétences.exe</span>
          <WindowControls />
        </div>

        <div className="skill-body">
          {BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className={`skill-branch skill-branch--${branch.color}`}
            >
              <p className="skill-branch-title">{branch.title}</p>
              <ul className="skill-list">
                {branch.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <button className="next-btn" onClick={onNext}>
        Quêtes →
      </button>
    </div>
  );
}

export default SkillTree;
