"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ShippedProject = {
  number: string;
  name: string;
  stack: string;
  description: string;
  url: string;
  sourceUrl?: string;
  screenshot: string;
};

const shippedProjects: ShippedProject[] = [
  {
    number: "01",
    name: "Chronomètre",
    stack: "Next.js · React · TypeScript",
    description: "Chrono avec tours (laps), gestion d'état temps réel via hooks React.",
    url: "https://mon-projet-snowy-alpha.vercel.app/",
    screenshot: "/screenshots/Chronomètre.png",
  },
  {
    number: "02",
    name: "Calculatrice",
    stack: "Next.js · React · TypeScript",
    description: "Calculatrice fidèle à une app native, logique de calcul en chaîne.",
    url: "https://calculator-app-woad-chi.vercel.app/",
    screenshot: "/screenshots/Calculatrice.png",
  },
  {
    number: "03",
    name: "Snake (PICO-8)",
    stack: "Next.js · React · TypeScript",
    description: "Boucle de jeu, détection de collisions, direction artistique rétro pixel-art.",
    url: "https://snake-game-ebon-phi.vercel.app/",
    screenshot: "/screenshots/SnakeGame.png",
  },
  {
    number: "04",
    name: "Space Invaders",
    stack: "Next.js · React · TypeScript",
    description: "Vagues infinies, 3 classes d'ennemis, boucle de jeu 60 FPS, gestion refs/state.",
    url: "https://space-invaders-tau-seven.vercel.app/",
    screenshot: "/screenshots/SpaceInvader.png",
  },
  {
    number: "05",
    name: "Pacman",
    stack: "Next.js · React · TypeScript",
    description: "Génération procédurale de labyrinthe (DFS + braiding + symétrie miroir), IA de poursuite, power pellets.",
    url: "https://pacman-game-orpin.vercel.app/",
    screenshot: "/screenshots/PacmanGame.png",
  },
  {
    number: "06",
    name: "Mario",
    stack: "Next.js · React · TypeScript",
    description: "Jeu de plateforme à 3 niveaux, moteur physique (gravité/vélocité), ennemis, drapeau d'arrivée.",
    url: "https://mario-game-chi-hazel.vercel.app/",
    screenshot: "/screenshots/MarioGame.png",
  },
  {
    number: "07",
    name: "LivInParisDemo",
    stack: "Next.js · React · TypeScript",
    description: "Démo interactive : calcul d'itinéraire (Dijkstra) sur le réseau de métro parisien et dashboard de statistiques clients avec filtres, portés depuis le projet C# original.",
    url: "https://livinparis-demo.vercel.app/",
    sourceUrl: "https://github.com/PierreBoudraa/LivInParis",
    screenshot: "/screenshots/LivInParis.png",
  },
];

const roadmap = [
  { date: "À venir", title: "Détection d'objets", note: "Modèle vision (YOLO) connecté à une interface web." },
  { date: "À venir", title: "Agent IA", note: "Agent avec accès à des outils (recherche, calcul)." },
  { date: "À venir", title: "Mini-SaaS", note: "Un vrai produit, lancé et testé auprès d'utilisateurs." },
];

const stack = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "C", "C#", "SQL", "FastAPI", "Git", "Vercel",
];

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "étudiant en ingénierie Data & IA";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen text-[#f3efe6]" style={{ fontFamily: "var(--font-display)" }}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-8">
  <span className="text-lg font-medium">Pierre BOUDRAÂ</span>
  <div className="flex gap-6 text-sm" style={{ fontFamily: "var(--font-mono)" }}>
    <a href="https://github.com/PierreBoudraa" target="_blank" rel="noopener noreferrer" className="text-[#8b8a99] hover:text-[#f3efe6] transition-colors">
      GitHub
    </a>
    <a href="https://www.linkedin.com/in/pierre-boudraa-783534326" target="_blank" rel="noopener noreferrer" className="text-[#8b8a99] hover:text-[#f3efe6] transition-colors">
      LinkedIn
    </a>
    <a href="mailto:pboudraa81@gmail.com" className="text-[#8b8a99] hover:text-[#f3efe6] transition-colors">
  pboudraa81@gmail.com
</a>
  </div>
</nav>

        {/* Hero */}
        <section className="py-20">
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
            Mon portfolio
          </h1>
          <p className="text-lg text-[#8b8a99] max-w-md mb-6">
            J&apos;apprends en travaillant sur un projet à la fois, je suis actuellement{" "}
            <span className="text-[#f3efe6]">{typedText}</span>
          </p>
        </section>

        {/* Projets déployés */}
        <section className="py-16 border-t border-[#2a2a38]">
          <p
            className="text-sm text-[#59d9c4] mb-8"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Projets déployés : {shippedProjects.length}
          </p>

          <div className="flex flex-col">
            {shippedProjects.map((project) => (
              <div
                key={project.number}
                className="group flex items-start gap-6 py-6 border-b border-[#2a2a38] hover:bg-[#1b1b26] transition-colors px-2 -mx-2 rounded"
              >
                <span
                  className="text-sm text-[#8b8a99] pt-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {project.number}
                </span>
                <div className="relative w-28 h-20 shrink-0 rounded overflow-hidden bg-[#1b1b26] border border-[#2a2a38]">
                  <Image
                    src={project.screenshot}
                    alt={`Aperçu du projet ${project.name}`}
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-medium group-hover:text-[#ffb400] transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[#8b8a99] mb-2">{project.description}</p>
                  <p
                    className="text-xs text-[#59d9c4]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {project.stack}
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-end pt-1 shrink-0">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8b8a99] hover:text-[#ffb400] transition-colors text-sm"
                  >
                    Démo
                  </a>
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8b8a99] hover:text-[#ffb400] transition-colors text-sm"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-16 border-t border-[#2a2a38]">
          <p
            className="text-sm text-[#ffb400] mb-8"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Projets à venir :
          </p>

          <div className="flex flex-col gap-6">
            {roadmap.map((item, i) => (
              <div key={i} className="flex items-start gap-6">
                <span
                  className="text-xs text-[#8b8a99] pt-1 w-16 shrink-0"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.date}
                </span>
                <div>
                  <h4 className="text-base font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-[#8b8a99]">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="py-16 border-t border-[#2a2a38]">
          <p
            className="text-sm text-[#8b8a99] mb-6"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Compétences techniques : 
          </p>
          <div className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1.5 bg-[#1b1b26] rounded text-[#f3efe6]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}