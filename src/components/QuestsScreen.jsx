import "../css/Window.css";
import "../css/QuestsScreen.css";
import WindowControls from "./WindowControls";
import sproutQuestLogo from "../assets/sprout-quest-logo.png";
import wcdexLogo from "../assets/wcdex-logo.png";
import quizQueenIcon from "../assets/quiz-queen-icon.png";

const SECONDARY_QUESTS = [
  {
    id: "wcdex",
    title: "WC Dex",
    // logo avec le nom du projet : il remplace le titre texte
    logo: wcdexLogo,
    logoType: "wordmark",
    difficulty: 2,
    description:
      "Projet d'étude autour de la manipulation d'une API publique (données OpenData Paris). Je l'ai adapté à ma façon en transformant les données OpenData de Nantes Métropole en Pokédex des toilettes publiques.",
    stack: ["JavaScript", "Fetch API", "OpenData", "CSS"],
    reward: "+120 XP",
    demoUrl: "https://adataviz-five.vercel.app/",
    githubUrl: "https://github.com/Offichigo/adataviz",
  },
  {
    id: "quizqueen",
    title: "Quiz Queen",
    // petite icône (44 px) : affichée à côté du titre, à sa taille réelle
    logo: quizQueenIcon,
    logoType: "icon",
    difficulty: 2,
    description:
      "Application de quiz interactif avec chargement dynamique des questions, calcul du score final et design personnalisé. Projet réalisé en équipe de 3.",
    stack: ["JavaScript", "DOM", "JSON", "CSS", "Git"],
    reward: "+90 XP",
    demoUrl: "https://quiz-queen-theta.vercel.app/",
    githubUrl: "https://github.com/Offichigo/Quiz-Queen-",
  },
];

function QuestsScreen({ onNext }) {
  return (
    <div className="quests-screen">
      <div className="title-window quests-window">
        <div className="character-bar">
          <span>quetes.exe</span>
          <WindowControls />
        </div>

        <div className="quests-body">
          <h2 className="quests-heading">⚔️ Journal des quêtes</h2>

          {/* Quête principale */}
          <div className="main-quest-card">
            <span className="main-quest-tag">Quête principale</span>
            <h3 className="main-quest-title">
              <img
                src={sproutQuestLogo}
                alt="Sprout Quest"
                className="main-quest-logo"
              />
            </h3>
            <p className="main-quest-desc">
              Créer une application web gamifiée de gestion des tâches
              familiales, pour impliquer les enfants dans les tâches ménagères.
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
                <div className="quest-progress-fill" style={{ width: "100%" }} />
              </div>
              <span className="quest-progress-label">V1 terminée · 100 %</span>
            </div>

            <ul className="quest-rewards">
              <li>Équipe : Off, Elodie, Gaédic</li>
              <li>Rôle : développeuse, gestion du Jira, UX/UI, graphisme</li>
              <li>Projet de fin de formation · RNCP 6</li>
              <li>Prochaine étape : V2 en préparation pour le déploiement</li>
            </ul>

            <div className="quest-boss-banner">
              🏆 Boss final vaincu : titre CDA (RNCP 6) obtenu — novembre 2026
            </div>
          </div>
          {/* Quêtes secondaires */}
          <h3 className="secondary-heading">✦ Quêtes secondaires ✦</h3>
          <div className="secondary-quests-grid">
            {SECONDARY_QUESTS.map((quest) => (
              <div key={quest.id} className="secondary-quest-card">
                <div className="secondary-quest-header">
                  {quest.logoType === "wordmark" ? (
                    <img
                      src={quest.logo}
                      alt={quest.title}
                      className="secondary-quest-logo"
                    />
                  ) : (
                    <>
                      {quest.logo && (
                        <img
                          src={quest.logo}
                          alt=""
                          width="44"
                          height="44"
                          className="secondary-quest-icon"
                        />
                      )}
                      <span className="secondary-quest-title">
                        {quest.title}
                      </span>
                    </>
                  )}
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
                <div className="secondary-quest-links">
                  {quest.demoUrl && (
                    <a
                      href={quest.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="quest-link"
                    >
                      ▶ Jouer la démo
                    </a>
                  )}
                  {quest.githubUrl && (
                    <a
                      href={quest.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="quest-link quest-link--code"
                    >
                      💻 Voir le code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quête secrète */}
          <div className="locked-quest-card">
            <span className="locked-quest-icon">🔒</span>
            <div>
              <p className="locked-quest-title">
                Prochaine Quête — Premier poste de développeuse web junior
              </p>
              <p className="locked-quest-desc">
                Trouver la guilde parfaite, à Nantes ou en full remote, pour
                continuer l'aventure.
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
