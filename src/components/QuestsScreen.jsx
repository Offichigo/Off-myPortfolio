import "../css/Window.css";
import "../css/QuestsScreen.css";
import WindowControls from "./WindowControls";

const SECONDARY_QUESTS = [
  {
    id: "wcdex",
    title: "WC Dex",
    difficulty: 2,
    description:
      "Projet d'étude autour de la manipulation d'une API publique (données OpenData Paris). Je l'ai adapté à ma façon en transformant les données OpenData de Nantes Métropole en Pokédex des toilettes publiques.",
    stack: ["JavaScript", "Fetch API", "OpenData", "CSS"],
    reward: "+120 XP",
    demoUrl: "https://adataviz-five.vercel.app/",
  },
  {
    id: "quizqueen",
    title: "Quiz Queen",
    difficulty: 2,
    description:
      "Application de quiz interactif avec chargement dynamique des questions, calcul du score final et design personnalisé. Projet réalisé en équipe de 3.",
    stack: ["JavaScript", "DOM", "JSON", "CSS", "Git"],
    reward: "+90 XP",
    demoUrl: "https://quiz-queen-theta.vercel.app/",
  },
  {
    id: "adashboard",
    title: "Adashboard",
    difficulty: 3,
    description:
      "Application full stack pour gérer et visualiser des compétences et leurs tâches associées.",
    stack: ["React", "Express", "PostgreSQL", "Docker"],
    reward: "+100 XP",
    githubUrl:
      "https://github.com/Offichigo/giselehalimi_adashboard_offperianin",
  },
];

function QuestsScreen({ onNext }) {
  return (
    <div className="quests-screen">
      <div className="title-window quests-window">
        <div className="character-bar">
          <span>OFF.exe — quêtes</span>
          <WindowControls />
        </div>

        <div className="quests-body">
          <h2 className="quests-heading">⚔️ Journal des quêtes ⚔️</h2>

          {/* Quête principale */}
          <div className="main-quest-card">
            <span className="main-quest-tag">Quête principale</span>
            <h3 className="main-quest-title">Sprout Quest</h3>
            <p className="main-quest-desc">
              Créer une application web de gestion des tâches familiales,
              gamifiée, pour impliquer les enfants dans les tâches ménagères.
            </p>

            <div className="quest-stack">
              {[
                "JavaScript",
                "React",
                "Node.js/Express",
                "PostgreSQL",
                "Docker",
                "Figma",
                "Docusaurus",
                "Jest",
                "CSS",
              ].map((tech) => (
                <span key={tech} className="quest-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="quest-progress">
              <div className="quest-progress-bar">
                <div className="quest-progress-fill" style={{ width: "80%" }} />
              </div>
              <span className="quest-progress-label">80%</span>
            </div>

            <ul className="quest-rewards">
              <li>Équipe : Off, Elodie, Gaédic</li>
              <li>Rôle : Dévelloppeuse, gestion du Jira, UX/UI, graphisme</li>
              <li>Projet de fin de formation · RNCP 6</li>
            </ul>

            <div className="quest-boss-banner">
              🏆 Boss final : soutenance RNCP 6 — 2 novembre 2026
            </div>
          </div>
          {/* **TODO AJOUT DES LIENS  */}
          {/* Quêtes secondaires */}
          <h3 className="secondary-heading">✦ Quêtes secondaires ✦</h3>
          <div className="secondary-quests-grid">
            {SECONDARY_QUESTS.map((quest) => (
              <div key={quest.id} className="secondary-quest-card">
                <div className="secondary-quest-header">
                  <span className="secondary-quest-title">{quest.title}</span>
                </div>
                <p className="secondary-quest-desc">{quest.description}</p>
                <div className="quest-stack">
                  {quest.stack.map((tech) => (
                    <span key={tech} className="quest-badge quest-badge--sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="secondary-quest-footer">
                  <span className="secondary-quest-reward">
                    🏅 {quest.reward}
                  </span>
                  <span className="secondary-quest-done">✓ Terminée</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quête secrète */}
          <div className="locked-quest-card">
            <span className="locked-quest-icon">🔒</span>
            <div>
              <p className="locked-quest-title">
                Prochaine Quête — Alternance 2027
              </p>
              <p className="locked-quest-desc">
                Trouver la guilde parfaite pour continuer l'aventure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="next-btn" onClick={onNext}>
        Progression ▶
      </button>
    </div>
  );
}

export default QuestsScreen;
