
/* --------------------------------
   SURPRISE BUTTON
-------------------------------- */

const surpriseBtn =
    document.getElementById("surpriseBtn");

const surpriseSection =
    document.getElementById("surpriseSection");

surpriseBtn.addEventListener("click", () => {

    surpriseSection.classList.remove("hidden");

    surpriseSection.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();

    surpriseBtn.innerHTML =
        "💖 Surprise Opened!";

});


/* --------------------------------
   CELEBRATE BUTTON
-------------------------------- */

const celebrateBtn =
    document.getElementById("celebrateBtn");

celebrateBtn.addEventListener("click", () => {

    createConfetti(150);

    createHearts(30);

});


/* --------------------------------
   FLOATING HEARTS
-------------------------------- */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "✨",
        "💜"
    ];

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 7) + "s";

    document
        .querySelector(".hearts")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}


/* Create hearts continuously */

setInterval(createHeart, 800);


/* --------------------------------
   CREATE MANY HEARTS
-------------------------------- */

function createHearts(amount = 20) {

    for (let i = 0; i < amount; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 100);

    }
}


/* --------------------------------
   CONFETTI
-------------------------------- */

function createConfetti(amount = 100) {

    const shapes = [
        "🎉",
        "✨",
        "💖",
        "🎊",
        "💕",
        "⭐"
    ];

    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.innerHTML =
            shapes[
                Math.floor(
                    Math.random() * shapes.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.fontSize =
            (12 + Math.random() * 20) + "px";

        confetti.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }
}


/* --------------------------------
   PAGE LOAD EFFECT
-------------------------------- */

window.addEventListener("load", () => {

    setTimeout(() => {
        createHearts(10);
    }, 500);

});



/* =========================
   🎂 BIRTHDAY DATE
========================= */

const birthdayDate = "2026-12-25T00:00:00+05:30";


function updateBirthdayTimer() {

  const birthday =
    new Date(birthdayDate).getTime();

  const now =
    new Date().getTime();

  const difference =
    birthday - now;


  /* Birthday has arrived */

  if (difference <= 0) {

    document.getElementById("timerDays").textContent = "00";
    document.getElementById("timerHours").textContent = "00";
    document.getElementById("timerMinutes").textContent = "00";
    document.getElementById("timerSeconds").textContent = "00";

    document.getElementById("timerMessage").innerHTML =
      "🎂🎉 HAPPY BIRTHDAY! 🎉🎂";

    return;
  }


  /* Calculate time */

  const days =
    Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    );

  const hours =
    Math.floor(
      (difference %
        (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );

  const minutes =
    Math.floor(
      (difference %
        (1000 * 60 * 60)) /
      (1000 * 60)
    );

  const seconds =
    Math.floor(
      (difference %
        (1000 * 60)) /
      1000
    );


  /* Display */

  document.getElementById("timerDays").textContent =
    String(days).padStart(2, "0");

  document.getElementById("timerHours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("timerMinutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("timerSeconds").textContent =
    String(seconds).padStart(2, "0");

}


/* Start timer */

updateBirthdayTimer();

setInterval(updateBirthdayTimer, 1000);