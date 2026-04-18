/* =========================================
   GELATO DREAMS — Flavor Explorer
   ========================================= */

const flavorsData = [
  {
    id: 'vanilla',
    emoji: '🍦',
    category: 'classic',
    sweetness: 3,
    tags: ['popular'],
    color: '#f5e6c8'
  },
  {
    id: 'strawberry',
    emoji: '🍓',
    category: 'fruity',
    sweetness: 4,
    tags: ['popular'],
    color: '#e8788a'
  },
  {
    id: 'pistachio',
    emoji: '🟢',
    category: 'classic',
    sweetness: 2,
    tags: ['popular'],
    color: '#93c572'
  },
  {
    id: 'chocolate',
    emoji: '🍫',
    category: 'classic',
    sweetness: 3,
    tags: [],
    color: '#6b4226'
  },
  {
    id: 'mango',
    emoji: '🥭',
    category: 'exotic',
    sweetness: 4,
    tags: ['vegan'],
    color: '#f7b955'
  },
  {
    id: 'blueberry',
    emoji: '🫐',
    category: 'seasonal',
    sweetness: 3,
    tags: ['seasonal', 'new'],
    color: '#8b7ec8'
  },
  {
    id: 'mint',
    emoji: '🌿',
    category: 'classic',
    sweetness: 2,
    tags: [],
    color: '#7ec8a9'
  },
  {
    id: 'caramel',
    emoji: '🍯',
    category: 'exotic',
    sweetness: 5,
    tags: ['popular'],
    color: '#d4915c'
  }
];

class FlavorExplorer {
  constructor() {
    this.grid = null;
    this.filterBtns = [];
    this.currentFilter = 'all';
    this.modal = null;
    this.modalOverlay = null;
  }

  init() {
    this.grid = document.getElementById('flavors-grid');
    this.filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
    this.modalOverlay = document.getElementById('flavor-modal-overlay');
    this.modal = document.getElementById('flavor-modal');

    if (!this.grid) return;

    this.renderFlavors(flavorsData);
    this.bindEvents();
  }

  bindEvents() {
    // Filter buttons
    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        this.setFilter(filter);
      });
    });

    // Modal close
    const modalClose = document.getElementById('flavor-modal-close');
    if (modalClose) {
      modalClose.addEventListener('click', () => this.closeModal());
    }

    if (this.modalOverlay) {
      this.modalOverlay.addEventListener('click', (e) => {
        if (e.target === this.modalOverlay) this.closeModal();
      });
    }

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
  }

  setFilter(filter) {
    this.currentFilter = filter;

    this.filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
    });

    const filtered = filter === 'all'
      ? flavorsData
      : flavorsData.filter(f => f.category === filter);

    this.renderFlavors(filtered);
  }

  renderFlavors(flavors) {
    // Animate out
    this.grid.style.opacity = '0';
    this.grid.style.transform = 'translateY(10px)';

    setTimeout(() => {
      this.grid.innerHTML = flavors.map((f, idx) => this.createFlavorCard(f, idx)).join('');
      
      // Bind card clicks
      this.grid.querySelectorAll('.flavor-card').forEach(card => {
        card.addEventListener('click', () => {
          const id = card.getAttribute('data-flavor-id');
          this.openModal(id);
        });

        // 3D tilt effect
        card.addEventListener('mousemove', (e) => this.handleTilt(e, card));
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });

      // Animate in
      requestAnimationFrame(() => {
        this.grid.style.opacity = '1';
        this.grid.style.transform = 'translateY(0)';
      });
    }, 200);
  }

  createFlavorCard(flavor, index) {
    const name = window.i18n.t(`flavor.${flavor.id}.name`);
    const desc = window.i18n.t(`flavor.${flavor.id}.desc`);
    const sweetnessLabel = window.i18n.t('flavors.sweetness');

    const dots = Array.from({ length: 5 }, (_, i) =>
      `<span class="sweetness-dot ${i < flavor.sweetness ? 'active' : ''}"></span>`
    ).join('');

    const tags = flavor.tags.map(tag =>
      `<span class="flavor-tag ${tag}">${tag}</span>`
    ).join('');

    return `
      <div class="flavor-card" data-flavor-id="${flavor.id}" style="--flavor-color: ${flavor.color}; animation-delay: ${index * 80}ms" tabindex="0" role="button" aria-label="${name}">
        <div class="flavor-card-inner">
          <span class="flavor-emoji">${flavor.emoji}</span>
          <h4 class="flavor-name">${name}</h4>
          <p class="flavor-description">${desc}</p>
          <div class="flavor-meta">
            <div class="sweetness-meter">
              <span>${sweetnessLabel}</span>
              <div class="sweetness-bar">${dots}</div>
            </div>
            <div class="flavor-tags">${tags}</div>
          </div>
        </div>
      </div>
    `;
  }

  handleTilt(e, card) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  }

  openModal(flavorId) {
    const flavor = flavorsData.find(f => f.id === flavorId);
    if (!flavor || !this.modalOverlay) return;

    const name = window.i18n.t(`flavor.${flavor.id}.name`);
    const long = window.i18n.t(`flavor.${flavor.id}.long`);
    const ingredients = window.i18n.t(`flavor.${flavor.id}.ingredients`);
    const allergens = window.i18n.t(`flavor.${flavor.id}.allergens`);
    const calories = window.i18n.t(`flavor.${flavor.id}.calories`);

    const ingredientsLabel = window.i18n.t('flavors.ingredients');
    const allergensLabel = window.i18n.t('flavors.allergens');
    const caloriesLabel = window.i18n.t('flavors.calories');
    const sweetnessLabel = window.i18n.t('flavors.sweetness');

    const dots = Array.from({ length: 5 }, (_, i) =>
      `<span class="sweetness-dot ${i < flavor.sweetness ? 'active' : ''}"></span>`
    ).join('');

    const modalBody = this.modal.querySelector('.flavor-modal-body');
    const modalImg = this.modal.querySelector('.flavor-modal-img');

    if (modalImg) modalImg.textContent = flavor.emoji;
    if (modalBody) {
      modalBody.innerHTML = `
        <h3>${name}</h3>
        <p>${long}</p>
        <div class="sweetness-meter" style="margin-bottom: var(--space-lg);">
          <span>${sweetnessLabel}</span>
          <div class="sweetness-bar">${dots}</div>
        </div>
        <div class="flavor-info-grid">
          <div class="flavor-info-item">
            <h5>${ingredientsLabel}</h5>
            <p>${ingredients}</p>
          </div>
          <div class="flavor-info-item">
            <h5>${allergensLabel}</h5>
            <p>${allergens}</p>
          </div>
          <div class="flavor-info-item">
            <h5>${caloriesLabel}</h5>
            <p>${calories}</p>
          </div>
          <div class="flavor-info-item">
            <h5>Category</h5>
            <p style="text-transform: capitalize;">${flavor.category}</p>
          </div>
        </div>
      `;
    }

    this.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    if (this.modalOverlay) {
      this.modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Called when language changes to re-render
  refresh() {
    const filtered = this.currentFilter === 'all'
      ? flavorsData
      : flavorsData.filter(f => f.category === this.currentFilter);
    this.renderFlavors(filtered);
  }
}

window.flavorExplorer = new FlavorExplorer();
