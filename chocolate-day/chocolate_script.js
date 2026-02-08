const CHOCOLATE_PASSWORD = "SweetTvisha1807";

const INGREDIENTS = [
  "🍫 Dark Chocolate",
  "🍫 Milk Chocolate",
  "🍯 Caramel",
  "🍓 Strawberry",
  "🥜 Nuts",
  "🍪 Cookie Crunch",
  "🍒 Cherry"
];

let selected = [];

function unlockChocolate() {
  const input = document.getElementById("passwordInput").value.trim();
  const error = document.getElementById("error");

  if (input === CHOCOLATE_PASSWORD) {
    window.location.href = "chocolate_intro.html";
  } else {
    error.textContent = "Wrong password 🥺";
  }
}

function goToLetter() {
  window.location.href = "chocolate_letter.html";
}

function goToGame() {
  window.location.href = "chocolate_game.html";
}

function goBackToLetter() {
  window.location.href = "chocolate_letter.html";
}

function goNext() {
  window.location.href = "../teddy-day/teddy_unlock.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("ingredients");
  if (!container) return;

  const fill = document.getElementById("sweetFill");
  const text = document.getElementById("sweetText");
  const overlay = document.getElementById("fadeOverlay");
  const backBtn = document.getElementById("backBtn");

  INGREDIENTS.forEach(item => {
    const div = document.createElement("div");
    div.className = "ingredient";
    div.textContent = item;

    div.onclick = () => {
      if (selected.includes(item)) return;

      selected.push(item);
      div.classList.add("used");

      fill.style.width = (selected.length / INGREDIENTS.length) * 100 + "%";
      text.textContent = `Sweetness: ${selected.length} / ${INGREDIENTS.length} 🍫`;

      if (selected.length === INGREDIENTS.length) {
        setTimeout(() => {
  overlay.classList.add("show");
}, 600); // soft delay

setTimeout(() => {
  backBtn.classList.remove("hidden");
  localStorage.setItem("chocolateCompleted", "true");
}, 1200);

      }
    };

    container.appendChild(div);
  });
});
