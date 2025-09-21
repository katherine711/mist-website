const btn = document.getElementById("toggleBtn");
const text = document.getElementById("toggleText");

btn.addEventListener("click", () => {
  text.classList.toggle("hidden");
});
