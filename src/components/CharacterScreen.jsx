import "../css/Window.css";
import "../css/TitleScreen.css";
import "../css/CharacterScreen.css";
function CharacterScreen() {
  return (
    <div className="title-window">
      <div className="character-bar">
        <span>qui ? — création-de-personnage.exe</span>
      </div>

      <div className="title-sheet">
        <span className="sheet">nom du personnage</span>
        <p className="character-value">Ophélie "Off" Perianin</p>

        <span className="sheet">zone de départ</span>
        <p>Nantes</p>

        <span className="sheet">classe actuelle</span>
        <p>Conceptrice Développeuse d'Applications (en formation)</p>

        <span className="sheet">quête principale</span>
        <p>Devenir développeuse web full stack</p>

        <span className="sheet">bio</span>
        <p>
          Après plusieurs quêtes secondaires dans la restauration, le nettoyage,
          l'éducation, Off débloque en 2013 la compétence "Reprise d'études".
          Cette décision lui permet d'obtenir un DAEU, puis une licence et un
          master en cinéma et audiovisuel.
          <br />
          <br />
          Quelques années plus tard, elle rejoint la guilde des conseillers
          numériques avant d'évoluer vers le rôle d'animatrice numérique. Son
          aventure a toujours été guidée par les mêmes objectifs : apprendre,
          créer et rendre les outils plus accessibles.
          <br />
          <br />
          Aujourd'hui, une nouvelle quête est en cours : maîtriser le
          développement web et construire des expériences utiles, inclusives et
          créatives.
        </p>

        <span className="sheet">skills</span>
        <p>
          ✨ Curiosité +10
          <br />
          🎨 Créativité +9
          <br />
          🔍 Résolution de problèmes +8
          <br />
          🌱 Adaptabilité +9
          <br />⚡ Persévérance +10
        </p>

        <span className="sheet">aime</span>
        <p>
          🎮 Jeux vidéo
          <br />
          🎬 Cinéma
          <br />
          🐱 Chats
          <br />
          💻 Développement web
        </p>
        <button className="start-btn">Créer →</button>
      </div>
    </div>
  );
}
export default CharacterScreen;
