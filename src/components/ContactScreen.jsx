import "../css/Window.css";
import "../css/ContactScreen.css";
import WindowControls from "./WindowControls";

const LINKS = [
  {
    id: "email",
    icon: "✉️",
    label: "Email",
    value: "oph.perianin@gmail.com",
    href: "mailto:oph.perianin@gmail.com",
    color: "pink",
  },
  {
    id: "github",
    icon: "💻",
    label: "GitHub",
    value: "github.com/Offichigo",
    href: "https://github.com/Offichigo",
    color: "blue",
  },
  {
    id: "linkedin",
    icon: "🔗",
    label: "LinkedIn",
    value: "in/oph-elie-perianin",
    href: "https://www.linkedin.com/in/oph-elie-perianin/",
    color: "lavender",
  },
];

function ContactScreen() {
  return (
    <div className="contact-screen">
      <div className="title-window contact-screen-window">
        <div className="character-bar">
          <span>contact.exe</span>
          <WindowControls />
        </div>

        <div className="contact-screen-body">
          <h2 className="contact-screen-heading">📡 Invoquer Off</h2>
          <p className="contact-screen-subheading">
            Disponible pour une alternance à partir de janvier 2027 — n'hésite
            pas à me contacter.
          </p>

          <a
            href="/cv/CV_Ophelie_Perianin.pdf"
            download="CV_Ophelie_Perianin.pdf"
            className="contact-screen-cv-btn"
          >
            📄 Télécharger mon CV
          </a>

          <div className="contact-screen-grid">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.id === "email" ? undefined : "_blank"}
                rel={link.id === "email" ? undefined : "noreferrer"}
                className={`contact-screen-card contact-screen-card--${link.color}`}
              >
                <span className="contact-screen-icon">{link.icon}</span>
                <span className="contact-screen-label">{link.label}</span>
                <span className="contact-screen-value">{link.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;
