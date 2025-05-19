# Loic_Fontaine

# 🧠 Projet Front-End Interactif

## 📁 Structure du projet

.
├── index.html # CV
├── index2.html # Calculatrice avancée
├── index3.html # Quiz + formulaire de contact
├── index4.html # Surprise (vidéo/fond animé)
├── src/
│ ├── style.css
│ ├── style2.css # Calculatrice
│ ├── style3.css # Quiz
│ ├── script.js # Quiz
│ └── gif/ # GIFs animés

yaml
Copy
Edit

---

## 🧾 Pages et Fonctionnalités

### 🧑‍💼 `index.html` – CV interactif

- Menu de navigation stylisé.
- Fond dégradé (`bg-gradient-to-br from-gray-900 to-gray-800`).
- Interface épurée avec navigation vers les autres sections.

---

### 🔢 `index2.html` – Calculatrice avancée

- UI moderne avec Tailwind CSS.
- Options incluses :
  - Addition, soustraction, multiplication, division
  - Bouton "C" (clear), retour arrière (⌫), point décimal, égal (=)
- Animations :
  - Survol : scale, ombre portée
  - Click : effet de rebond (`active:scale-95`)
- Fond animé (étoiles ou particules rapides, sans changer la couleur).
- **GIF animé** se déplaçant de gauche à droite en bas de l’écran.

---

### ❓ `index3.html` – Quiz interactif

- Questions à choix multiples.
- Correction immédiate avec feedback visuel :
  - Vert = bonne réponse
  - Rouge = mauvaise réponse
- Score final affiché.
- Bouton "Contacter quelqu’un" après le score :
  - Ouvre une **popup modal**
  - Formulaire avec **nom**, **email**, **message**
  - Design responsive et épuré

---

### 🎁 `index4.html` – Surprise

- Contient :
  - Vidéo en plein écran OU
  - Fond animé avec étoiles rapides / particules
- Effet visuel immersif
- Aucun contenu cliquable, ambiance visuelle uniquement

---

## 🖼️ GIF en bas de l'écran

À intégrer dans toutes les pages si besoin :

```html
<img src="src/gif/ton-gif.gif" class="gif-anime" alt="gif animé" />