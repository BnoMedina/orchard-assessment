export function setupGallery() {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeModal");

  // Save focus before opening
  let lastFocusedElement = null;

  document.querySelectorAll(".gallery-item").forEach((img) => {
    img.addEventListener("click", () => {
      lastFocusedElement = document.activeElement;

      // Preload full image
      const fullSrc = img.dataset.full || img.src;
      const tempImg = new Image();
      tempImg.src = fullSrc;
      tempImg.onload = () => {
        modalImg.src = fullSrc;
        modal.style.display = "flex";
        modal.setAttribute("aria-hidden", "false");

        // move focus inside modal
        closeBtn.focus();
      };
    });
  });

  // Close modal on button
  closeBtn.addEventListener("click", closeModal);

  // Close modal with ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
    if (e.key === "Tab" && modal.style.display === "flex") {
      // trap focus inside modal
      e.preventDefault();
      closeBtn.focus();
    }
  });

  // Close when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    if (lastFocusedElement) lastFocusedElement.focus();
  }
}
