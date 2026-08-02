// ===============================
// TKBD9999 Premium Script
// ===============================

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);

  }, 1200);
});

// Hero Button
function startGame() {
  document.getElementById("games").scrollIntoView({
    behavior: "smooth"
  });
}

// Search
const searchInput = document.getElementById("searchInput");

if (searchInput) {

  searchInput.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    document.querySelectorAll(".game-card").forEach(card => {

      let game = card.dataset.name.toLowerCase();

      if (game.includes(value)) {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

}

// Theme
const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {

  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {

    themeBtn.innerHTML =
      '<i class="fa-solid fa-sun"></i>';

  } else {

    themeBtn.innerHTML =
      '<i class="fa-solid fa-moon"></i>';

  }

};

// Favourite
document.querySelectorAll(".game-bottom i").forEach(icon => {

  icon.onclick = function () {

    if (this.classList.contains("fa-regular")) {

      this.classList.remove("fa-regular");
      this.classList.add("fa-solid");

    } else {

      this.classList.remove("fa-solid");
      this.classList.add("fa-regular");

    }

  };

});

// Play Button
document.querySelectorAll(".game-bottom button").forEach(btn => {

  btn.onclick = function () {

    const game =
      this.parentElement.parentElement.querySelector("h3").innerText;

    alert("🎮 Opening " + game);

  };

});

// Navigation
document.querySelectorAll(".nav").forEach(nav => {

  nav.onclick = function () {

    document.querySelectorAll(".nav")
      .forEach(n => n.classList.remove("active"));

    this.classList.add("active");

  };

});

// Bonus
const bonusBtn = document.querySelector(".bonus button");

if (bonusBtn) {

  bonusBtn.onclick = () => {

    alert("🎁 Daily Reward Claimed!");

  };

}

console.log("TKBD9999 Premium Loaded Successfully");
