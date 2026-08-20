// ============================================================
// Theme switcher: cycles Light -> Dark -> Green (troll) -> Light
// Persists choice in localStorage so it survives a page refresh.
// ============================================================

(function () {
  const THEMES = ["light", "dark", "green"];
  const LABELS = {
    light: "Light Mode",
    dark: "Dark Mode",
    green: "??? Mode",
  };

  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const toggleLabel = document.getElementById("theme-toggle-label");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    toggleLabel.textContent = LABELS[theme] || theme;
    try {
      localStorage.setItem("kinggnu-theme", theme);
    } catch (e) {
      // localStorage unavailable (e.g. private browsing) — theme just won't persist
    }
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem("kinggnu-theme");
    } catch (e) {
      return null;
    }
  }

  function nextTheme(current) {
    const i = THEMES.indexOf(current);
    return THEMES[(i + 1) % THEMES.length];
  }

  // Initialize: stored preference, else default to dark (matches the
  // data-theme already set in the HTML for a no-flash first paint).
  const initial = getStoredTheme() || root.getAttribute("data-theme") || "dark";
  applyTheme(initial);

  toggleBtn.addEventListener("click", function () {
    const current = root.getAttribute("data-theme");
    applyTheme(nextTheme(current));
  });
})();