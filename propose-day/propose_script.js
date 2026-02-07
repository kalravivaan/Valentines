// 💍 Propose Day Password
const PROPOSE_PASSWORD = "VivaanLovesTvisha";

// Called ONLY from propose_unlock.html
function unlockPropose() {
  const input = document.getElementById("passwordInput").value.trim();
  const error = document.getElementById("error");

  if (input === PROPOSE_PASSWORD) {
    // remember unlock for this session
    sessionStorage.setItem("proposeUnlocked", "true");

    // go to intro page
    window.location.href = "propose_intro.html";
  } else {
    error.textContent = "Wrong password 🥺 Try again!";
  }
}

// Called from propose_intro.html
function goToLetter() {
  window.location.href = "propose_letter.html";
}
