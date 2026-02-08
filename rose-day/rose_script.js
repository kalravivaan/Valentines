// 🌹 Rose Day Password
const ROSE_PASSWORD = "RoseForTvisha";

// Called ONLY from rose_unlock.html
function unlockRoseDay() {
  const input = document.getElementById("passwordInput").value.trim();
  const error = document.getElementById("error");

  if (input === "RoseForTvisha") {
    localStorage.setItem("valentineProgress", "1");
    window.location.href = "rose_intro.html";
  } else {
    error.textContent = "Wrong password 🥺 Try again!";
  }
}


// Called from rose_intro.html
function goToLetter() {
  window.location.href = "rose_letter.html";
}

function goNext() {
  window.location.href = "../propose-day/propose_unlock.html";
}

/* 🌹 Whack-a-Rose Game */

const TOTAL_ROSES = 11;
let roseCount = Number(localStorage.getItem("roseCount")) || 0;

document.addEventListener("DOMContentLoaded", () => {
  const garden = document.getElementById("garden");
  const fill = document.querySelector(".bouquet-fill::after");
  const countText = document.getElementById("roseCount");
  const backBtn = document.getElementById("backBtn");

  if (!garden) return;

  updateBouquet();

  function updateBouquet() {
    const percent = (roseCount / TOTAL_ROSES) * 100;
    document.querySelector(".bouquet-fill").style.setProperty(
      "--fill-width",
      percent + "%"
    );
    document.getElementById("roseCount").textContent =
      `${roseCount} / ${TOTAL_ROSES}`;
  }

  function spawnRose() {
    if (roseCount >= TOTAL_ROSES) return;

    const rose = document.createElement("div");
    rose.className = "rose";
    rose.textContent = "🌹";

    rose.style.left = Math.random() * 85 + "%";
    rose.style.top = Math.random() * 75 + "%";

    garden.appendChild(rose);

    const timeout = setTimeout(() => {
      rose.remove();
    }, 1200);

    rose.onclick = () => {
      clearTimeout(timeout);
      rose.remove();
      roseCount++;
      localStorage.setItem("roseCount", roseCount);
      updateBouquet();

      if (roseCount >= TOTAL_ROSES) {
        localStorage.setItem("roseCompleted", "true");
        backBtn.classList.remove("hidden");
      }
    };
  }

  setInterval(spawnRose, 900);
});

function goBackToLetter() {
  window.location.href = "rose_letter.html";
}

function resetRoseGarden() {
  localStorage.removeItem("roseCount");
  localStorage.removeItem("roseCompleted");

  location.reload();
}
