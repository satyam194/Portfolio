/* ==========================================
   SPLASH PAGE JAVASCRIPT
========================================== */

/* ==========================================
   THEME TOGGLE
========================================== */

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-mode', savedTheme === 'light');
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const isLightMode = document.body.classList.toggle('light-mode');
    const theme = isLightMode ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('themeToggle');
    if (icon) {
        icon.querySelector('.theme-icon').textContent = theme === 'light' ? '☀️' : '🌙';
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initTheme);

/* ==========================================
   NAVIGATION
========================================== */

function enterPortfolio() {
    const overlay = document.getElementById('transitionOverlay');
    
    // Activate overlay fade
    overlay.classList.add('active');
    
    // Set flag to trigger entrance animations on index.html
    sessionStorage.setItem('fromSplash', 'true');
    
    // Redirect to portfolio after fade
    setTimeout(() => {
        window.location.href = 'portfolio.html';
    }, 600);
}
