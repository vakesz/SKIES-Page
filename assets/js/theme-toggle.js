(function() {
  const STORAGE_KEY = 'jtd-theme';
  const LIGHT_THEME = 'light';
  const DARK_THEME = 'dark';

  // Check if user has a saved preference, otherwise use system preference
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK_THEME;
    }

    return LIGHT_THEME;
  }

  // Apply theme to the document
  function applyTheme(theme) {
    if (theme === DARK_THEME) {
      jtd.setTheme('dark');
    } else {
      jtd.setTheme('light');
    }
  }

  // Initialize theme on page load
  function initTheme() {
    // Wait for jtd to be available
    if (typeof jtd !== 'undefined' && jtd.setTheme) {
      const theme = getPreferredTheme();
      applyTheme(theme);
      localStorage.setItem(STORAGE_KEY, theme);
    } else {
      // Retry after a short delay if jtd is not yet available
      setTimeout(initTheme, 50);
    }
  }

  // Listen for system theme changes
  if (window.matchMedia) {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addListener(function(e) {
      // Only auto-switch if user hasn't manually set a preference
      const savedTheme = localStorage.getItem(STORAGE_KEY);
      if (!savedTheme) {
        const newTheme = e.matches ? DARK_THEME : LIGHT_THEME;
        applyTheme(newTheme);
      }
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // Expose function to manually toggle theme (optional)
  window.toggleTheme = function() {
    const currentTheme = localStorage.getItem(STORAGE_KEY) || getPreferredTheme();
    const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    applyTheme(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  };
})();
