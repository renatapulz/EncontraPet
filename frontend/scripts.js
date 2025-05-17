document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");
  
    toggleButton.addEventListener("click", () => {
      menu.classList.toggle("show");
      toggleButton.textContent = menu.classList.contains("show") ? "✖" : "☰";
    });
  });