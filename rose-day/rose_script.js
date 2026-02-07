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

