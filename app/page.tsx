"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CV_URL = "/CV_Pierre_Boudraa.pdf";

type Project = {
  number: string;
  name: string;
  stack: string;
  description: string;
  url: string;
  sourceUrl?: string;
  isCodeOnly?: boolean;
  screenshot: string;
  metric?: string;
};

const projects: Project[] = [
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
  {
    number: "08",
    name: "Prédiction Ligue 1 - Machine Learning",
    stack: "Python · scikit-learn · pandas",
    description: "Pipeline ML prédisant les résultats de Ligue 1 à partir de 10 ans de données historiques : rating Elo, forme récente, ensemble de modèles (Random Forest, HistGradientBoosting, Logistic Regression) validés par TimeSeriesSplit.",
    url: "https://github.com/PierreBoudraa/ligue1-prediction",
    isCodeOnly: true,
    screenshot: "/screenshots/ligue1-prediction.png",
    metric: "Random Forest : 59 % d'accuracy sur test temporel (saisons 2023-2024), soit +16 points vs baseline naïve (43 %).",
  },
  {
    number: "09",
    name: "ALTERDUNE - RPG tour par tour",
    stack: "C++ · Programmation orientée objet",
    description: "RPG console inspiré d'Undertale : système de combat FIGHT/ACT/ITEM/MERCY, bestiaire, contenu piloté par fichiers CSV (monstres, items, actions).",
    url: "https://github.com/PierreBoudraa/alterdune-rpg",
    isCodeOnly: true,
    screenshot: "/screenshots/alterdune.png",
  },
  {
    number: "10",
    name: "Ultimate Tic-Tac-Toe - Moteur C++ & IA",
    stack: "C++ · Python · PyTorch · pybind11",
    description: "Moteur de jeu en bitboards, générateur de données par exploration exhaustive, réseau de neurones (PyTorch) dont le forward pass est réimplémenté à la main en C++ pour l'inférence, exposé à Python via pybind11.",
    url: "https://github.com/PierreBoudraa/ultimate-tictactoe",
    isCodeOnly: true,
    screenshot: "/screenshots/ultimate-tictactoe.png",
  },
  {
    number: "11",
    name: "BOOGLE",
    stack: "Next.js · React · TypeScript pour la démo web, original en C#",
    description: "Démo web interactive du jeu de mots Boggle : recherche dichotomique et backtracking sur grille portés depuis le projet original en C#.",
    url: "https://boogle-demo.vercel.app/",
    sourceUrl: "https://github.com/PierreBoudraa/boogle-game",
    screenshot: "/screenshots/Boogle.png",
  },
  {
    number: "12",
    name: "Jeu d'échecs - Moteur C# & Blazor",
    stack: "C# · .NET 8 · Blazor WebAssembly, interface WPF d'origine",
    description: "Jeu d'échecs jouable dans le navigateur : roque, prise en passant, promotion, échec et mat, pat. Le moteur C# de la version WPF est compilé en WebAssembly avec Blazor et s'exécute côté client, sans serveur.",
    url: "https://pierreboudraa.github.io/mychessgame/",
    sourceUrl: "https://github.com/PierreBoudraa/mychessgame",
    screenshot: "/screenshots/chess.png",
  },
  {
    number: "13",
    name: "Détection d'objets en temps réel",
    stack: "Next.js · TensorFlow.js · COCO-SSD",
    description: "Détection d'objets via webcam, 100% côté client (aucun serveur). Modèle pré-entraîné COCO-SSD, très fiable sur les personnes (classe la mieux représentée dans le dataset d'entraînement), plus sensible au flou de mouvement sur les objets.",
    url: "https://object-detection-murex.vercel.app/",
    screenshot: "/screenshots/object-detection.png",
  },
];

// Projets mis en avant, dans l'ordre d'affichage (par numéro).
const featuredNumbers = ["10", "08", "12", "07"];

const featuredProjects = featuredNumbers
  .map((n) => projects.find((p) => p.number === n))
  .filter((p): p is Project => Boolean(p));

const otherProjects = projects.filter((p) => !featuredNumbers.includes(p.number));

const roadmap = [
  { date: "À venir", title: "Agent IA", note: "Agent avec accès à des outils (recherche, calcul)." },
  { date: "À venir", title: "Mini-SaaS", note: "Un vrai produit, lancé et testé auprès d'utilisateurs." },
];

const stack = [
  "Python", "C++", "C#", "SQL", "PyTorch", "scikit-learn", "pandas",
  "Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Git", "Vercel",
];

const linkClass = "text-[#8b8a99] hover:text-[#ffb400] transition-colors text-sm";
const monoStyle = { fontFamily: "var(--font-mono)" } as const;

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
          <div className="flex gap-6 text-sm" style={monoStyle}>
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
          <p className="text-base text-[#8b8a99] max-w-xl mb-8">
            En 4<sup>e</sup> année de double diplôme ESILV / EMLV, je recherche un{" "}
            <span className="text-[#f3efe6]">stage de 4 mois (avril–juillet 2027) en Data Science / Machine Learning</span>.
          </p>
          <div className="flex flex-wrap gap-4 text-sm" style={monoStyle}>
            <a
              href={CV_URL}
              download
              className="px-4 py-2 rounded bg-[#ffb400] text-[#0f0f16] font-medium hover:opacity-90 transition-opacity"
            >
              Télécharger le CV
            </a>
            <a
              href="#projets"
              className="px-4 py-2 rounded border border-[#2a2a38] text-[#f3efe6] hover:bg-[#1b1b26] transition-colors"
            >
              Voir les projets
            </a>
          </div>
        </section>

        {/* Projets phares */}
        <section id="projets" className="py-16 border-t border-[#2a2a38]">
          <p className="text-sm text-[#59d9c4] mb-8" style={monoStyle}>
            Projets phares
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.number}
                className="group flex flex-col rounded border border-[#2a2a38] bg-[#14141c] hover:bg-[#1b1b26] transition-colors overflow-hidden"
              >
                <div className="relative w-full h-44 bg-[#1b1b26] border-b border-[#2a2a38]">
                  <Image
                    src={project.screenshot}
                    alt={`Aperçu du projet ${project.name}`}
                    fill
                    sizes="(min-width: 640px) 360px, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-lg font-medium mb-2 group-hover:text-[#ffb400] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[#8b8a99] mb-3">{project.description}</p>
                  {project.metric && (
                    <p className="text-sm text-[#f3efe6] mb-3 border-l-2 border-[#59d9c4] pl-3">
                      {project.metric}
                    </p>
                  )}
                  <p className="text-xs text-[#59d9c4] mb-4" style={monoStyle}>
                    {project.stack}
                  </p>
                  <div className="flex gap-4 mt-auto">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {project.isCodeOnly ? "Code" : "Démo"}
                    </a>
                    {project.sourceUrl && (
                      <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Autres projets */}
        <section className="py-16 border-t border-[#2a2a38]">
          <p className="text-sm text-[#8b8a99] mb-8" style={monoStyle}>
            Autres projets : {otherProjects.length}
          </p>

          <div className="flex flex-col">
            {otherProjects.map((project) => (
              <div
                key={project.number}
                className="group flex items-start justify-between gap-6 py-4 border-b border-[#2a2a38] hover:bg-[#1b1b26] transition-colors px-2 -mx-2 rounded"
              >
                <div className="flex-1">
                  <h3 className="text-base font-medium mb-1 group-hover:text-[#ffb400] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[#8b8a99] mb-1">{project.description}</p>
                  <p className="text-xs text-[#59d9c4]" style={monoStyle}>
                    {project.stack}
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-end shrink-0">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {project.isCodeOnly ? "Code" : "Démo"}
                  </a>
                  {project.sourceUrl && (
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
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
          <p className="text-sm text-[#ffb400] mb-8" style={monoStyle}>
            Projets à venir :
          </p>

          <div className="flex flex-col gap-6">
            {roadmap.map((item, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-[#8b8a99] pt-1 w-16 shrink-0" style={monoStyle}>
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
          <p className="text-sm text-[#8b8a99] mb-6" style={monoStyle}>
            Compétences techniques :
          </p>
          <div className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1.5 bg-[#1b1b26] rounded text-[#f3efe6]"
                style={monoStyle}
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