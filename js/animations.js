/* =========================================
   GELATO DREAMS — Scroll Animations
   ========================================= */

class ScrollAnimations {
  constructor() {
    this.observer = null;
    this.counterObserver = null;
    this.countersAnimated = false;
  }

  init() {
    this.setupIntersectionObserver();
    this.setupCounterObserver();
    this.setupRippleEffect();
    this.setupSprinkles();
  }

  setupIntersectionObserver() {
    const options = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          
          if (el.classList.contains('anim-hidden')) {
            el.classList.add('anim-visible');
          } else if (el.classList.contains('anim-hidden-left')) {
            el.classList.add('anim-visible-left');
          } else if (el.classList.contains('anim-hidden-right')) {
            el.classList.add('anim-visible-right');
          } else if (el.classList.contains('anim-hidden-scale')) {
            el.classList.add('anim-visible-scale');
          } else if (el.classList.contains('stagger-children')) {
            el.classList.add('anim-visible');
          }

          // Unobserve after animation
          this.observer.unobserve(el);
        }
      });
    }, options);

    // Observe all animated elements
    document.querySelectorAll('.anim-hidden, .anim-hidden-left, .anim-hidden-right, .anim-hidden-scale, .stagger-children').forEach(el => {
      this.observer.observe(el);
    });
  }

  setupCounterObserver() {
    const counters = document.querySelectorAll('.counter-number');
    if (counters.length === 0) return;

    this.counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.countersAnimated) {
          this.countersAnimated = true;
          this.animateCounters();
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => this.counterObserver.observe(el));
  }

  animateCounters() {
    const counters = document.querySelectorAll('.counter-number');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const suffix = counter.getAttribute('data-suffix') || '';
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * ease);

        counter.textContent = current.toLocaleString() + suffix;

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  }

  setupRippleEffect() {
    document.querySelectorAll('.btn-ripple').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const rect = btn.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        btn.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  setupSprinkles() {
    const container = document.querySelector('.sprinkles');
    if (!container) return;

    // Check for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const colors = ['#e8788a', '#f7b955', '#7ec8a9', '#8b7ec8', '#93c572', '#f5e6c8'];
    const count = 20;

    for (let i = 0; i < count; i++) {
      const sprinkle = document.createElement('div');
      sprinkle.className = 'sprinkle';
      sprinkle.style.left = `${Math.random() * 100}%`;
      sprinkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      sprinkle.style.animationDuration = `${8 + Math.random() * 12}s`;
      sprinkle.style.animationDelay = `${Math.random() * 10}s`;
      sprinkle.style.width = `${3 + Math.random() * 3}px`;
      sprinkle.style.height = `${10 + Math.random() * 10}px`;
      container.appendChild(sprinkle);
    }
  }
}

window.scrollAnimations = new ScrollAnimations();
