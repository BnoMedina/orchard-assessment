export function setupCards() {
  document.querySelectorAll(".cards a").forEach((link) => {
    link.addEventListener("click", (e) => {
      console.log("Card clicked:", e.target);
    });
  });
}
