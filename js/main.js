// CMA Yol Yardım - Static Site JavaScript

// ========================================
// Mobile Menu
// ========================================
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  mobileMenu.classList.toggle('open');
  
  if (mobileMenu.classList.contains('open')) {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  mobileMenu.classList.remove('open');
  menuIcon.style.display = 'block';
  closeIcon.style.display = 'none';
}

// ========================================
// Navbar Scroll Effect
// ========================================
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  
  // Navbar background change on scroll
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Show/hide scroll to top button
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
  
  // Update active nav link based on scroll position
  updateActiveNavLink();
});

// ========================================
// Active Navigation Link
// ========================================
function updateActiveNavLink() {
  const sections = ['anasayfa', 'hizmetler', 'hakkimizda', 'neden-biz', 'yorumlar', 'iletisim'];
  const navLinks = document.querySelectorAll('.navbar-link');
  
  let currentSection = 'anasayfa';
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150) {
        currentSection = sections[i];
        break;
      }
    }
  }
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
}

// ========================================
// Scroll to Top
// ========================================
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// ========================================
// FAQ Accordion
// ========================================
function toggleFAQ(button) {
  const faqItem = button.closest('.faq-item');
  const allFaqItems = document.querySelectorAll('.faq-item');
  
  // Close all other FAQ items
  allFaqItems.forEach(item => {
    if (item !== faqItem) {
      item.classList.remove('open');
    }
  });
  
  // Toggle current FAQ item
  faqItem.classList.toggle('open');
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scroll to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const navbarHeight = document.getElementById('navbar').offsetHeight;
          const topBarHeight = document.querySelector('.top-bar')?.offsetHeight || 0;
          const offset = navbarHeight;
          
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Initialize - update active nav link on page load
  updateActiveNavLink();
});

// ========================================
// Intersection Observer for Animations
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll(
      '.service-card, .testimonial-card, .about-stat, .whyus-card, .whyus-reason, .proof-point, .contact-card, .faq-item'
    );
    
    animateElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
});

// Add CSS for animation
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// ========================================
// Console Welcome Message
// ========================================
console.log('%c CMA Yol Yardım ', 'background: #0ea5e9; color: white; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c 7/24 Profesyonel Oto Kurtarma Hizmeti ', 'color: #64748b; font-size: 14px;');
console.log('%c Tel: 0530 975 58 19 ', 'color: #0ea5e9; font-size: 12px;');
