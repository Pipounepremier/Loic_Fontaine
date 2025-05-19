const display = document.getElementById("display");

function append(char) {
  if (display.innerText === "0" || display.innerText === "Erreur") {
    display.innerText = char;
  } else {
    display.innerText += char;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function backspace() {
  const current = display.innerText;
  display.innerText = current.length <= 1 ? "0" : current.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.innerText
      .replace(/÷/g, "/")
      .replace(/×/g, "*");

    const result = Function(`return (${expression})`)();
    display.innerText = Number.isFinite(result) ? result : "Erreur";
  } catch {
    display.innerText = "Erreur";
  }
}