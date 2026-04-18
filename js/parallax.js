/* =========================================
   GELATO DREAMS — Parallax Engine
   ========================================= */

class ParallaxEngine {
  constructor() {
    this.elements = [];
    this.ticking = false;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  init() {
    if (this.reducedMotion) return;

    this.elements = Array.from(document.querySelectorAll('[data-parallax]'));
    
    if (this.elements.length === 0) return;

    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    this.onScroll(); // Initial position
  }

  onScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.update();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  update() {
    const scrollY = window.pageYOffset;
    const viewportHeight = window.innerHeight;

    this.elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const speed = parseFloat(el.getAttribute('data-parallax') || 0.3);
      const direction = el.getAttribute('data-parallax-dir') || 'y';

      // Only animate elements near viewport
      if (rect.bottom < -200 || rect.top > viewportHeight + 200) return;

      // Calculate offset from center of viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const offset = (elementCenter - viewportCenter) * speed;

      if (direction === 'y') {
        el.style.transform = `translate3d(0, ${-offset}px, 0)`;
      } else if (direction === 'x') {
        el.style.transform = `translate3d(${-offset}px, 0, 0)`;
      } else if (direction === 'scale') {
        const scale = 1 + Math.abs(offset) * 0.0005;
        el.style.transform = `scale(${scale})`;
      } else if (direction === 'rotate') {
        el.style.transform = `rotate(${offset * 0.05}deg)`;
      }
    });
  }
}

window.parallaxEngine = new ParallaxEngine();
