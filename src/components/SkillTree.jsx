import "../css/Window.css";
import "../css/SkillTree.css";
import WindowControls from "./WindowControls";
import SkillWheel from "./SkillWheel";

const BRANCHES = [
  {
    id: "dev",
    title: "🌿 Skills",
    color: "green",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js / Express",
      "PostgreSQL",
      "Docker",
      "Godot",
      "HTML / CSS",
      "Manipulation du DOM",
      "Gestion de versions Git",
      "Fetch API / OpenData",
      "Conception de bases de données (MCD / MLD)",
      "Tests unitaires (Jest, Vitest)",
      "Accessibilité web / Mobile first",
      "Sécurité web",
      "Gestion de projets web, jeux vidéo et audiovisuels",
    ],
  },
  {
    id: "outils",
    title: "🛠️ Arsenal & Outils",
    color: "blue",
    skills: [
      "Notion",
      "Jira",
      "Méthode Agile",
      "Figma",
      "Trello",
      "Visual Studio Code",
    ],
  },
  {
    id: "crea",
    title: "🎨 Métier Créatif",
    color: "pink",
    skills: [
      "Utilisation d'outils graphiques",
      "Création de contenus visuels",
      "UI / UX",
      "Pixel art",
      "Montage vidéo",
      "Cadrage vidéo",
    ],
  },
  {
    id: "soft",
    title: "💬 Talents",
    color: "amber",
    skills: [
      "Adaptabilité",
      "Travail en équipe",
      "Pédagogie numérique",
      "Autonomie",
      "Curiosité",
      "Écoute active",
      "Gestion des conflits",
      "Persévérance",
    ],
  },
];

function SkillTree({ onNext }) {
  return (
    <div className="skill-screen">
      <div className="title-window skill-window">
        <div className="character-bar">
          <span>competences.exe</span>
          <WindowControls />
        </div>

        <div className="skill-body">
          {BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className={`skill-branch skill-branch--${branch.color}`}
            >
              <p className="skill-branch-title">{branch.title}</p>
              <SkillWheel skills={branch.skills} color={branch.color} />
            </div>
          ))}
        </div>
      </div>

      <button className="next-btn" onClick={onNext}>
        Quêtes ▶
      </button>
    </div>
  );
}

export default SkillTree;
