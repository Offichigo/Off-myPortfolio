import "../css/ContactCard.css";

function ContactCard() {
  return (
    <div className="contact-window">
      <div className="contact-bar">
        <span>STATUT DU JOUEUR</span>
      </div>

      <div className="contact-body">
        <div className="contact-avatar">👩🏻</div>
        <p className="contact-class">
          Développeuse Full Stack
          <br />
          en devenir
        </p>

        <div className="contact-links">
          <a href="mailto:oph.perianin@gmail.com" className="contact-link">
            ✉️ oph.perianin@gmail.com
          </a>
          <a
            href="https://github.com/Offichigo"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            💻 github.com/Offichigo
          </a>
          <a
            href="https://www.linkedin.com/in/oph-elie-perianin/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
