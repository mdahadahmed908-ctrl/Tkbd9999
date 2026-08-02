// ===== LOADER =====
window.addEventListener("load", function () {
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
    const cards = document.querySelectorAll(".game-card");

    cards.forEach(card => {
      const name = card.dataset.name.toLowerCase();

      if (name.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// ===== THEME =====
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      document.body.style.background = "#f5f5f5";
      document.body.style.color = "#111";
      themeBtn.innerHTML = "☀️";
    } else {
      document.body.style.background = "#07141f";
      document.body.style.color = "#fff";
      themeBtn.innerHTML = "🌙";
    }

  });
}

// ===== PLAY BUTTON =====
document.querySelectorAll(".game-card button").forEach(btn => {

  btn.addEventListener("click", function () {

    const game =
      this.parentElement.querySelector("h3").innerText;

    alert("🎮 Opening " + game);

  });

});

console.log("Tkbd9999 Loaded Successfully");
