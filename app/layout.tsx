import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Pierre Boudraa — Étudiant ingénieur Data & IA",
  description:
    "Étudiant ingénieur ESILV/EMLV, majeure Data & IA. Recherche un stage Data Science / Machine Learning (avril–juillet 2027). Projets : moteur C++ avec réseau de neurones, prédiction Ligue 1, jeu d'échecs Blazor.",
  openGraph: {
    title: "Pierre Boudraa — Étudiant ingénieur Data & IA",
    description:
      "Projets en Machine Learning, C++ et développement web. Recherche un stage Data Science / ML (avril–juillet 2027).",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${spaceGrotesk.variable} ${plexMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}