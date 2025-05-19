window.addEventListener("scroll", revealElements);

function revealElements() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  revealElements(); // Appel initial
});