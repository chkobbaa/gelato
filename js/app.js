/* =========================================
   GELATO DREAMS — App Orchestrator
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  window.i18n.init();
  window.themeManager.init();
  window.navigation.init();
  window.parallaxEngine.init();
  window.carousel.init();
  window.flavorExplorer.init();
  window.scrollAnimations.init();

  // Setup language dropdown
  setupLanguageDropdown();

  // Setup contact form
  setupContactForm();

  // Setup open/closed indicator
  updateOpenStatus();

  // Re-render flavors on language change
  window.i18n.onLanguageChange(() => {
    window.flavorExplorer.refresh();
  });

  // Hero title animation delay
  animateHeroTitle();
});

function setupLanguageDropdown() {
  const dropdowns = document.querySelectorAll('.lang-dropdown');

  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.dropdown-trigger');
    const items = dropdown.querySelectorAll('.dropdown-item');

    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
      });
    }

    items.forEach(item => {
      item.addEventListener('click', () => {
        const lang = item.getAttribute('data-lang');
        window.i18n.setLanguage(lang);
        updateLangTrigger(dropdown, lang);
        dropdown.classList.remove('open');
      });
    });
  });

  // Close dropdown on outside click
  document.addEventListener('click', () => {
    dropdowns.forEach(d => d.classList.remove('open'));
  });

  // Set initial trigger text
  dropdowns.forEach(d => updateLangTrigger(d, window.i18n.currentLang));
}

function updateLangTrigger(dropdown, lang) {
  const trigger = dropdown.querySelector('.dropdown-trigger');
  if (!trigger) return;

  const flags = { en: '🇬🇧', fr: '🇫🇷', ar: '🇸🇦' };
  const names = { en: 'EN', fr: 'FR', ar: 'AR' };

  trigger.innerHTML = `
    <span class="lang-flag">${flags[lang] || ''}</span>
    <span>${names[lang] || lang.toUpperCase()}</span>
    <span style="font-size: 10px; opacity: 0.5;">▼</span>
  `;
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('.form-submit');
    const formInputs = form.querySelector('.form-inputs');
    const formSuccess = form.querySelector('.form-success');

    // Simulate sending
    if (btn) {
      btn.textContent = window.i18n.t('contact.form.sending');
      btn.disabled = true;
    }

    setTimeout(() => {
      if (formInputs) formInputs.style.display = 'none';
      if (formSuccess) formSuccess.classList.add('visible');

      // Reset after 3 seconds
      setTimeout(() => {
        form.reset();
        if (formInputs) formInputs.style.display = '';
        if (formSuccess) formSuccess.classList.remove('visible');
        if (btn) {
          btn.textContent = window.i18n.t('contact.form.submit');
          btn.disabled = false;
        }
      }, 4000);
    }, 1500);
  });
}

function updateOpenStatus() {
  const badge = document.getElementById('open-status');
  if (!badge) return;

  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon, ...
  const hour = now.getHours();

  let isOpen = false;

  if (day >= 1 && day <= 4) {
    // Mon-Thu: 11am-9pm
    isOpen = hour >= 11 && hour < 21;
  } else if (day === 5 || day === 6) {
    // Fri-Sat: 11am-11pm
    isOpen = hour >= 11 && hour < 23;
  } else {
    // Sun: 12pm-8pm
    isOpen = hour >= 12 && hour < 20;
  }

  const key = isOpen ? 'contact.open' : 'contact.closed';
  badge.textContent = window.i18n.t(key);
  badge.classList.toggle('open-badge', isOpen);
  badge.classList.toggle('closed-badge', !isOpen);

  // Update on language change
  window.i18n.onLanguageChange(() => {
    const k = isOpen ? 'contact.open' : 'contact.closed';
    badge.textContent = window.i18n.t(k);
  });
}

function animateHeroTitle() {
  const words = document.querySelectorAll('.hero-title .word span');
  words.forEach((span, i) => {
    span.style.animationDelay = `${0.3 + i * 0.15}s`;
  });
}

// Newsletter form
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('newsletter-btn')) {
    const input = e.target.previousElementSibling || e.target.closest('.newsletter-form')?.querySelector('.newsletter-input');
    if (input && input.value.includes('@')) {
      e.target.textContent = '✓';
      e.target.style.background = 'var(--mint)';
      input.value = '';
      setTimeout(() => {
        e.target.textContent = window.i18n.t('footer.newsletter.btn');
        e.target.style.background = '';
      }, 2000);
    }
  }
});
