console.log("Tkbd9999 Loaded Successfully");

// Search
const search = document.querySelector(".search-box input");

search.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();
  const games = document.querySelectorAll(".game-card");

  games.forEach(game => {
    const name = game.querySelector("h3").innerText.toLowerCase();

    if (name.includes(value)) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  });
});

// Play Button
document.querySelectorAll(".game-card button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Game feature coming soon!");
  });
});

// Bottom Navigation
document.querySelectorAll(".nav").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".nav").forEach(n => n.classList.remove("active"));
    item.classList.add("active");
  });
});
// Loading Screen
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";

    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 500);

  }, 1500);
});
// Dark Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){
    themeBtn.innerHTML="☀️";
  }else{
    themeBtn.innerHTML="🌙";
  }
});
