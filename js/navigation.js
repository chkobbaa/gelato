/* =========================================
   GELATO DREAMS — Navigation
   ========================================= */

class Navigation {
  constructor() {
    this.navbar = null;
    this.mobileToggle = null;
    this.mobileDrawer = null;
    this.mobileOverlay = null;
    this.scrollProgress = null;
    this.backToTop = null;
    this.sections = [];
    this.navLinks = [];
    this.lastScrollY = 0;
  }

  init() {
    this.navbar = document.getElementById('navbar');
    this.mobileToggle = document.getElementById('mobile-menu-toggle');
    this.mobileDrawer = document.getElementById('mobile-drawer');
    this.mobileOverlay = document.getElementById('mobile-drawer-overlay');
    this.scrollProgress = document.getElementById('scroll-progress');
    this.backToTop = document.getElementById('back-to-top');

    this.sections = Array.from(document.querySelectorAll('section[id]'));
    this.navLinks = Array.from(document.querySelectorAll('.navbar-link, .mobile-drawer-link'));

    this.bindEvents();
    this.updateOnScroll();
  }

  bindEvents() {
    // Scroll handler
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });

    // Mobile menu toggle
    if (this.mobileToggle) {
      this.mobileToggle.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Mobile overlay close
    if (this.mobileOverlay) {
      this.mobileOverlay.addEventListener('click', () => this.closeMobileMenu());
    }

    // Smooth scroll for nav links
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.replace('#', '');
        if (targetId) {
          this.scrollToSection(targetId);
          this.closeMobileMenu();
        }
      });
    });

    // Back to top
    if (this.backToTop) {
      this.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Close mobile menu on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeMobileMenu();
    });
  }

  onScroll() {
    requestAnimationFrame(() => this.updateOnScroll());
  }

  updateOnScroll() {
    const scrollY = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Navbar scroll state
    if (this.navbar) {
      this.navbar.classList.toggle('scrolled', scrollY > 50);
    }

    // Scroll progress bar
    if (this.scrollProgress) {
      const progress = (scrollY / docHeight) * 100;
      this.scrollProgress.style.width = `${progress}%`;
    }

    // Back to top visibility
    if (this.backToTop) {
      this.backToTop.classList.toggle('visible', scrollY > 500);
    }

    // Active section highlighting
    this.updateActiveSection(scrollY);

    this.lastScrollY = scrollY;
  }

  updateActiveSection(scrollY) {
    let currentSection = '';
    
    this.sections.forEach(section => {
      const top = section.offsetTop - 150;
      const bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        currentSection = section.id;
      }
    });

    this.navLinks.forEach(link => {
      const href = link.getAttribute('href')?.replace('#', '');
      link.classList.toggle('active', href === currentSection);
    });
  }

  scrollToSection(id) {
    const section = document.getElementById(id);
    if (!section) return;

    const navHeight = this.navbar ? this.navbar.offsetHeight : 0;
    const top = section.offsetTop - navHeight;

    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }

  toggleMobileMenu() {
    const isOpen = this.mobileDrawer?.classList.contains('open');
    if (isOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  openMobileMenu() {
    this.mobileDrawer?.classList.add('open');
    this.mobileOverlay?.classList.add('visible');
    this.mobileToggle?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeMobileMenu() {
    this.mobileDrawer?.classList.remove('open');
    this.mobileOverlay?.classList.remove('visible');
    this.mobileToggle?.classList.remove('active');
    document.body.style.overflow = '';
  }
}

window.navigation = new Navigation();
