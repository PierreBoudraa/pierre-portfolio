# Pierre Boudraa, Portfolio

Portfolio personnel d'étudiant ingénieur Data & IA : projets, démos jouables, roadmap et CV.

**Site en ligne : https://pierre-portfolio-xi.vercel.app/**

## Contenu

- Accroche et présentation, avec un bouton de téléchargement du CV
- Projets phares avec résultats chiffrés (machine learning, jeux, démos déployées)
- Liens vers les dépôts GitHub et les démos de chaque projet
- Métadonnées SEO et Open Graph pour des aperçus de lien propres (LinkedIn, messageries)

## Stack

- [Next.js](https://nextjs.org/) (App Router) avec React et TypeScript
- Polices Space Grotesk et IBM Plex Mono via `next/font`
- Déploiement continu sur [Vercel](https://vercel.com/) : chaque `git push` sur `main` redéploie le site

## Lancer le projet en local

```bash
git clone https://github.com/PierreBoudraa/pierre-portfolio.git
cd pierre-portfolio
npm install
npm run dev
```

Le site est ensuite disponible sur http://localhost:3000.

Pour vérifier le build de production :

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.tsx   # polices, métadonnées, structure HTML
  page.tsx     # page d'accueil
  globals.css  # styles globaux
public/
  CV_Pierre_Boudraa.pdf
```

## Contact

- GitHub : [PierreBoudraa](https://github.com/PierreBoudraa)
