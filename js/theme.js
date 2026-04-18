/* =========================================
   GELATO DREAMS — Theme System
   ========================================= */

class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('gelato-theme') || 'dark';
    this.toggleBtn = null;
  }

  init() {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    this.toggleBtn = document.getElementById('theme-toggle');
    
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggle());
      this.updateIcon();
    }

    // Also handle mobile theme toggle
    const mobileToggle = document.getElementById('mobile-theme-toggle');
    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => this.toggle());
    }
  }

  toggle() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem('gelato-theme', this.currentTheme);
    this.updateIcon();
    this.animateToggle();
  }

  updateIcon() {
    const icon = this.currentTheme === 'dark' ? '☀️' : '🌙';
    
    document.querySelectorAll('.theme-toggle .icon').forEach(el => {
      el.textContent = icon;
    });
  }

  animateToggle() {
    const toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(btn => {
      btn.classList.add('animating');
      setTimeout(() => btn.classList.remove('animating'), 500);
    });
  }
}

window.themeManager = new ThemeManager();
