// 💍 Propose Day Password
const PROPOSE_PASSWORD = "VivaanLovesTvisha";

// Called ONLY from propose_unlock.html
function unlockPropose() {
  const input = document.getElementById("passwordInput").value.trim();
  const error = document.getElementById("error");

  if (input === "VivaanLovesTvisha") {
    localStorage.setItem("valentineProgress", "2");
    window.location.href = "propose_intro.html";
  } else {
    error.textContent = "Wrong password 🥺 Try again!";
  }
}


// Called from propose_intro.html
function goToLetter() {
  window.location.href = "propose_letter.html";
}

// 💍 Propose Day – The Choice

const CHOICES = [
  "Forever ♾️", "Home 🏚️", "Future 🔮", "Marriage 💑", "Promise 🤞",
  "Love 💘", "Trust 💙", "Tviaan 🫶", "Always Together 💫", "Hand-in-Hand 🤝"
];

let selected = JSON.parse(localStorage.getItem("proposeChoices")) || [];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("choices");
  const completion = document.getElementById("completionText");
  const backBtn = document.getElementById("backBtn");

  if (!container) return;

  CHOICES.forEach(word => {
    const card = document.createElement("div");
    card.className = "choice-card";
    card.textContent = word;

    if (selected.includes(word)) {
      card.classList.add("selected");
    }

    card.onclick = () => {
      if (selected.includes(word)) return;

      selected.push(word);
      localStorage.setItem("proposeChoices", JSON.stringify(selected));
      card.classList.add("selected");

      if (selected.length === CHOICES.length) {
        localStorage.setItem("proposeCompleted", "true");

        // ❤️ Hearts first
        triggerHearts();

        // 🌫️ Fade screen
        setTimeout(() => {
          const overlay = document.getElementById("fadeOverlay");
          overlay.classList.remove("hidden");
          overlay.classList.add("show");
        }, 1400);

        // 💍 Show text
        setTimeout(() => {
          completion.classList.remove("hidden");
          backBtn.classList.remove("hidden");
        }, 2600);
      }
    };

    container.appendChild(card);
  });
});

/* ❤️ Heart Animation */
function triggerHearts() {
  for (let i = 0; i < 28; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-pop";
    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 1 + Math.random() * 1.5 + "s";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2500);
  }
}

function goBackToLetter() {
  window.location.href = "propose_letter.html";
}

function resetChoices() {
  localStorage.removeItem("proposeChoices");
  localStorage.removeItem("proposeCompleted");
  location.reload();
}
