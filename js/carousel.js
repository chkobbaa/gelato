/* =========================================
   GELATO DREAMS — Testimonials Carousel
   ========================================= */

class Carousel {
  constructor() {
    this.track = null;
    this.dots = [];
    this.currentIndex = 0;
    this.totalSlides = 0;
    this.autoPlayTimer = null;
    this.autoPlayDelay = 5000;
    this.isHovered = false;
    this.startX = 0;
    this.isDragging = false;
  }

  init() {
    this.track = document.getElementById('testimonials-track');
    if (!this.track) return;

    this.totalSlides = this.track.children.length;
    this.dots = Array.from(document.querySelectorAll('.testimonials-dots .dot'));

    this.bindEvents();
    this.startAutoPlay();
    this.goTo(0);
  }

  bindEvents() {
    // Dot navigation
    this.dots.forEach((dot, i) => {
      dot.addEventListener('click', () => this.goTo(i));
    });

    // Nav buttons
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());

    // Pause on hover
    const container = this.track.closest('.testimonials-carousel');
    if (container) {
      container.addEventListener('mouseenter', () => {
        this.isHovered = true;
        this.stopAutoPlay();
      });
      container.addEventListener('mouseleave', () => {
        this.isHovered = false;
        this.startAutoPlay();
      });
    }

    // Touch/swipe support
    this.track.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: true });
    this.track.addEventListener('touchend', (e) => this.onTouchEnd(e), { passive: true });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }

  goTo(index) {
    this.currentIndex = ((index % this.totalSlides) + this.totalSlides) % this.totalSlides;
    this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === this.currentIndex);
    });
  }

  next() {
    this.goTo(this.currentIndex + 1);
  }

  prev() {
    this.goTo(this.currentIndex - 1);
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => {
      if (!this.isHovered) this.next();
    }, this.autoPlayDelay);
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  onTouchStart(e) {
    this.startX = e.touches[0].clientX;
    this.isDragging = true;
  }

  onTouchEnd(e) {
    if (!this.isDragging) return;
    this.isDragging = false;
    
    const endX = e.changedTouches[0].clientX;
    const diff = this.startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) this.next();
      else this.prev();
    }
  }
}

window.carousel = new Carousel();
