# 🌐 Vite Project - Portfolio Interactif avec Quizz

[![Vite](https://img.shields.io/badge/Vite-4.x-blueviolet?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/status-active-success)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🧠 Fonctionnalités principales

- ✅ **Page CV** (`index.html`)
- 🧮 **Calculatrice interactive** (`index2.html`)
- 🧩 **Quizz gamifié** (`index4.html`)
  - Aléatoire, noté et conditionnel
  - 🔐 Accès au formulaire uniquement après réussite
  - 💥 Bouton **Brute Force** (auto-réponse via JS)
- 💬 **Formulaire de contact** (`index5.html`)
- 🎉 **Page surprise** (`index3.html`)
- 💅 Interface responsive, moderne avec **Tailwind CSS**

---

## 📁 Structure du projet
```
vite-project/
│
├── public/ 
├── src/                     # Code source principal
│   ├── gif/                 # Gifs éventuels utilisés dans tes pages
│   │   └── *.gif
│   │
│   ├── counter.js           # Script Vite par défaut (peut être supprimé si inutile)
│   ├── javascript.svg       # Ressource SVG pour design
│   ├── main.js              # Entrée JS Vite (si utilisé)
│   ├── script.js            # ✅ Script principal du quiz (inclut brute force)
│   ├── script2.js           # Script secondaire (ex: calculatrice ?)
│   ├── surprise.js          # Script pour la page "surprise"
│   ├── style.css            # Style global
│   ├── style1.css           # Style spécifique à une page (à renommer pour + clarté)
│   ├── style2.css           # Idem
│   ├── style3.css           # Style utilisé pour le quiz
│   ├── surprise.css         # Style spécifique pour la page surprise
│   └── vite.config.ts       # Configuration Vite (TypeScript)
│
├── .gitignore
├── index.html               # Page principale / CV
├── index2.html              # Calculatrice
├── index3.html              # Page "Contactez-moi"
├── index4.html              # Page surprise
├── index5.html              # Formulaire de contact (après quiz)
├── package.json             # Config projet / dépendances
├── package-lock.json
└── README.md                # 📘 Documentation du projet
```

---

## 🚀 Installation & Lancement

### Prérequis

- Node.js `>= 16`
- npm ou yarn

### Installation

```bash
# Cloner
git clone https://github.com/ton-utilisateur/vite-project.git
cd vite-project

# Installer les dépendances
npm install

# Lancer en dev
npm run dev

```
# 💡 Quizz + Brute Force
 - Un quizz intelligent déclenche l'accès au formulaire de contact (index5.html) uniquement si toutes les questions sont justes.
Un bouton Brute Force simule les bonnes réponses automatiquement.

- 👉 Utile pour démontrer des techniques de manipulation du DOM et d’automatisation JS.

# 📦 Stack technique
- Technologie	Usage
- Vite	Build ultra rapide
- TailwindCSS	UI responsive moderne
- JavaScript	Logique dynamique & brute force
- HTML/CSS	Structuration et style

# 🧑‍💻 Auteur
- Projet conçu avec passion pour mettre en valeur des compétences front-end, la gamification, et la logique conditionnelle avancée.

# 📄 Licence
- Ce projet est sous licence MIT — libre d’usage à but personnel ou éducatif.