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

      nextBtn.classList.remove("hidden");
    }

    nextBtn.addEventListener("click", () => {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        nextBtn.classList.add("hidden");
        showQuestion();
      } else {
        showScore();
      }
    });

    function showScore() {
      questionEl.classList.add("hidden");
      answersEl.classList.add("hidden");
      nextBtn.classList.add("hidden");
      scoreEl.textContent = `Votre score : ${score}/${quizData.length}`;
      scoreEl.classList.remove("hidden");
    }

  showQuestion();

  function showScore() {
  questionEl.classList.add("hidden");
  answersEl.classList.add("hidden");
  nextBtn.classList.add("hidden");
  scoreEl.textContent = `Votre score : ${score}/${quizData.length}`;
  scoreEl.classList.remove("hidden");
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contacter";
  contactBtn.className = "mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition";
  contactBtn.onclick = () => {
    document.getElementById("contact-container").classList.toggle("hidden");
    document.getElementById("contact-container").scrollIntoView({ behavior: "smooth" });
  };

  if (!document.getElementById("contact-btn")) {
    contactBtn.id = "contact-btn";
    scoreEl.after(contactBtn);
  }
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message envoyé, merci !");
  this.reset();
  document.getElementById("contact-container").classList.add("hidden");
});