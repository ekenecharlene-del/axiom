// Custom Cursor
const cursor = document.getElementById('custom-cursor');
const hoverElements = document.querySelectorAll('.hover-link');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

hoverElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
  });
  
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe project cards for stagger animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `all 0.8s ease ${index * 0.1}s`;
  observer.observe(card);
});

// Parallax effect on scroll
let lastScrollY = window.scrollY;
const hero = document.querySelector('section');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (hero && scrollY < window.innerHeight) {
    hero.style.transform = `translateY(${scrollY * 0.3}px)`;
    hero.style.opacity = 1 - (scrollY / 600);
  }
  lastScrollY = scrollY;
});

// Dynamic year for footer
const yearElement = document.querySelector('footer p');
if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.textContent = yearElement.textContent.replace('2026', currentYear);
}