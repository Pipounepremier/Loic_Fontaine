const quizData = [
  {
    question: "Quel est le plus grand océan du monde ?",
    answers: ["Atlantique", "Arctique", "Pacifique", "Indien"],
    correct: 2,
  },
  {
    question: "Combien de continents existe-t-il ?",
    answers: ["5", "6", "7", "8"],
    correct: 2,
  },
  {
    question: "Quelle planète est la plus proche du soleil ?",
    answers: ["Terre", "Mars", "Vénus", "Mercure"],
    correct: 3,
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

const contactBtn = document.getElementById("contact-btn");
const retryBtn = document.getElementById("retry-btn");
const quizActions = document.getElementById("quiz-actions");


function showQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.className = "w-full py-2 px-4 bg-indigo-100 text-indigo-800 rounded-lg hover:bg-indigo-200 font-semibold transition";
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(index);
    answersEl.appendChild(btn);
  });
  nextBtn.classList.add("hidden");  // Cache le bouton Suivant au début de chaque question
}

function selectAnswer(index) {
  const q = quizData[currentQuestion];
  const buttons = answersEl.querySelectorAll("button");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.add("bg-green-200", "text-green-800");
    } else if (i === index) {
      btn.classList.add("bg-red-200", "text-red-800");
    }
  });

  if (index === q.correct) score++;

  nextBtn.classList.remove("hidden"); // Montre le bouton Suivant
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
      showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.classList.add("hidden");
  answersEl.classList.add("hidden");
  nextBtn.classList.add("hidden");

  scoreEl.textContent = `Votre score : ${score} / ${quizData.length}`;
  scoreEl.classList.remove("hidden");
  quizActions.classList.remove("hidden");

  if (score === quizData.length) {
    contactBtn.classList.remove("hidden");
    retryBtn.classList.add("hidden");
  } else {
    contactBtn.classList.add("hidden");
    retryBtn.classList.remove("hidden");
  }
}

retryBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  questionEl.classList.remove("hidden");
  answersEl.classList.remove("hidden");
  scoreEl.classList.add("hidden");
  quizActions.classList.add("hidden");
  nextBtn.classList.add("hidden");

  contactBtn.classList.add("hidden");
  retryBtn.classList.add("hidden");

  showQuestion();
});

showQuestion();