const display = document.getElementById("display");

function append(char) {
  // Ajout avec effet de flash si c'est une opération
  if (['+', '-', '*', '/'].includes(char)) {
    display.classList.add("animate-pulse");
    setTimeout(() => display.classList.remove("animate-pulse"), 200);
  }

  if (display.innerText === '0' || display.innerText === 'Erreur') {
    display.innerText = char;
  } else {
    display.innerText += char;
  }
}

function clearDisplay() {
  display.innerText = '0';
  flashScreen("bg-red-200");
}

function backspace() {
  if (display.innerText.length === 1 || display.innerText === 'Erreur') {
    display.innerText = '0';
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  try {
    const result = eval(display.innerText);
    display.innerText = result;
    flashScreen("bg-green-200");
  } catch {
    display.innerText = 'Erreur';
    flashScreen("bg-red-400");
  }
}

function flashScreen(colorClass) {
  display.classList.add(colorClass);
  setTimeout(() => display.classList.remove(colorClass), 300);
}