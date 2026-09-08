import { useEffect, useRef } from "react";

function SkillWheel({ skills, color }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".wheel-item");

    // Observe chaque item : dès qu'il est bien visible (centré), on l'active
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "wheel-item--active",
            entry.isIntersecting,
          );
        });
      },
      {
        root: container, // on observe par rapport au conteneur scrollable, pas toute la page
        threshold: 0.6, // l'item doit être visible à 60% pour être considéré "actif"
      },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect(); // nettoyage à la destruction du composant
  }, [skills]);

  return (
    <div className={`skill-wheel skill-wheel--${color}`} ref={containerRef}>
      {skills.map((skill) => (
        <div key={skill} className="wheel-item">
          <span>{skill}</span>
        </div>
      ))}
    </div>
  );
}

export default SkillWheel;
