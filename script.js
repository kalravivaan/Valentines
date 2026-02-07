const messages = [
  "Are you sure? 🥺",
  "Pleaseee 💔",
  "Think again 😭",
  "My heart is cracking 💔",
  "Okay but I’ll be sad 😢",
  "Last chance pookie 💕",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️"

];

let i = 0;

function handleNoClick() {
  const noBtn = document.querySelector('.no-button');
  const yesBtn = document.querySelector('.yes-button');

  // Change No button text (cute messages)
  noBtn.textContent = messages[i];
  i = (i + 1) % messages.length;

  // Shake the No button
  noBtn.style.animation = 'shake 0.4s';
  setTimeout(() => noBtn.style.animation = '', 400);

  // 🔥 Grow the Yes button every time
  const currentSize = parseFloat(
    window.getComputedStyle(yesBtn).fontSize
  );
  yesBtn.style.fontSize = `${currentSize * 1.25}px`;
}


function handleYesClick() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.innerText = '💖';
    heart.style.position = 'fixed';
    heart.style.left = '50%';
    heart.style.top = '50%';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.transform = `translate(${Math.random()*400-200}px, ${Math.random()*400-200}px)`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }

  setTimeout(() => {
    window.location.href = "yes_page.html";
  }, 700);
}

<script>
  const progress = localStorage.getItem("valentineProgress");
  const continueBtn = document.getElementById("continueBtn");

  // Show button only if progress exists
  if (progress) {
    continueBtn.style.display = "inline-block";
  }

  function continueJourney() {
    if (progress === "1") {
      window.location.href = "rose-day/rose_intro.html";
    } else if (progress === "2") {
      window.location.href = "propose-day/propose_intro.html";
    }
  }
</script>

