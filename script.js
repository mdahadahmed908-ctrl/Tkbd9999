// ===== LOADER =====
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.display = "none";
  }, 1200);
});

// ===== SEARCH =====
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    document.querySelectorAll(".game-card").forEach(card => {

      const game = card.dataset.name.toLowerCase();

      if (game.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });
}

// ===== FAVORITE =====
document.querySelectorAll(".favorite").forEach(item => {

  item.addEventListener("click", function () {

    if (this.innerHTML == "🤍") {
      this.innerHTML = "❤️";
    } else {
      this.innerHTML = "🤍";
    }

  });

});

// ===== PLAY BUTTON =====
document.querySelectorAll(".game-card button").forEach(btn => {

  btn.addEventListener("click", function () {

    const game =
      this.parentElement.querySelector("h3").innerText;

    alert("🎮 Opening " + game);

  });

});

// ===== DAILY REWARD =====
function claimBonus() {
  alert("🎁 Daily Reward Claimed!");
}

// ===== HERO BUTTON =====
function startGame() {
  document
    .getElementById("games")
    .scrollIntoView({
      behavior: "smooth"
    });
}

// ===== THEME =====
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  if (document.body.style.background == "white") {

    document.body.style.background = "#07141f";
    document.body.style.color = "#fff";
    themeBtn.innerHTML = "🌙";

  } else {

    document.body.style.background = "white";
    document.body.style.color = "#111";
    themeBtn.innerHTML = "☀️";

  }

});

// ===== NAVIGATION =====
document.querySelectorAll(".nav").forEach(nav => {

  nav.addEventListener("click", () => {

    document.querySelectorAll(".nav")
      .forEach(n => n.classList.remove("active"));

    nav.classList.add("active");

  });

});

console.log("Tkbd9999 Loaded Successfully");
