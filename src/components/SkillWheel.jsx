import { useCallback, useEffect, useRef, useState } from "react";

function SkillWheel({ skills, color }) {
  const containerRef = useRef(null);
  // Les flèches s'éteignent quand on est au bout de la roue
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

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

  // Reste-t-il des compétences à gauche / à droite du centre ?
  const updateArrows = useCallback(() => {
    const wheel = containerRef.current;
    if (!wheel) return;
    const items = wheel.querySelectorAll(".wheel-item");
    if (!items.length) return;
    const box = wheel.getBoundingClientRect();
    const center = box.left + box.width / 2;
    const first = items[0].getBoundingClientRect();
    const last = items[items.length - 1].getBoundingClientRect();
    setCanPrev(first.left + first.width / 2 < center - 10);
    setCanNext(last.left + last.width / 2 > center + 10);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows, skills]);

  // Fait défiler la roue d'une compétence vers la gauche (-1) ou la droite (1)
  const step = (direction) => {
    const wheel = containerRef.current;
    const item = wheel.querySelector(".wheel-item");
    const gap = parseFloat(getComputedStyle(wheel).columnGap) || 0;
    wheel.scrollBy({
      left: direction * (item.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <div className="skill-wheel-wrap">
      <button
        type="button"
        className="wheel-arrow wheel-arrow--prev"
        aria-label="Compétence précédente"
        disabled={!canPrev}
        onClick={() => step(-1)}
      >
        ◀
      </button>

      <div
        className={`skill-wheel skill-wheel--${color}`}
        ref={containerRef}
        onScroll={updateArrows}
      >
        {skills.map((skill) => (
          <button
            key={skill}
            type="button"
            className="wheel-item"
            onClick={(e) => {
              // Un clic sur une case la ramène au centre de la roue
              const wheel = containerRef.current;
              const item = e.currentTarget.getBoundingClientRect();
              const box = wheel.getBoundingClientRect();
              wheel.scrollBy({
                left: item.left + item.width / 2 - (box.left + box.width / 2),
                behavior: "smooth",
              });
            }}
          >
            <span>{skill}</span>
          </button>
        ))}
      </div>

      <button
        type="button"
        className="wheel-arrow wheel-arrow--next"
        aria-label="Compétence suivante"
        disabled={!canNext}
        onClick={() => step(1)}
      >
        ▶
      </button>
    </div>
  );
}

export default SkillWheel;
