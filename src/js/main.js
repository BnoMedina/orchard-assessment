import "../css/style.css"; // ✅ this is required
import { setupCards } from "./cards.js";
import { setupGallery } from "./gallery.js";

document.addEventListener("DOMContentLoaded", () => {
  setupGallery();
  setupCards();
});
