        class AnimatedHamburgerNav {
            constructor() {
                this.hamburgerMenu = document.getElementById('hamburgerMenu');
                this.mobileMenu = document.getElementById('mobileMenu');
                this.menuOverlay = document.getElementById('menuOverlay');
                this.closeBtn = document.getElementById('closeBtn');
                this.mobileLinks = document.querySelectorAll('.mobile-nav-links a');
                
                this.isMenuOpen = false;
                
                // Check if required elements exist before initializing
                if (this.hamburgerMenu && this.mobileMenu && this.menuOverlay && this.closeBtn) {
                    this.init();
                } else {
                    console.warn('AnimatedHamburgerNav: Required elements not found');
                }
            }

            init() {
                // Hamburger click event
                this.hamburgerMenu.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.toggleMenu();
                });

                // Close button click event
                this.closeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.closeMenu();
                });

                // Overlay click event
                this.menuOverlay.addEventListener('click', () => {
                    this.closeMenu();
                });

                // Mobile links click events
                this.mobileLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        this.closeMenu();
                    });
                });

                // Click outside to close
                document.addEventListener('click', (e) => {
                    if (this.isMenuOpen && 
                        !this.mobileMenu.contains(e.target) && 
                        !this.hamburgerMenu.contains(e.target)) {
                        this.closeMenu();
                    }
                });

                // Escape key to close
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && this.isMenuOpen) {
                        this.closeMenu();
                    }
                });

                // Handle window resize
                window.addEventListener('resize', () => {
                    if (window.innerWidth > 768 && this.isMenuOpen) {
                        this.closeMenu();
                    }
                });
            }

            toggleMenu() {
                if (this.isMenuOpen) {
                    this.closeMenu();
                } else {
                    this.openMenu();
                }
            }

            openMenu() {
                if (!this.hamburgerMenu || !this.mobileMenu || !this.menuOverlay) return;
                
                this.isMenuOpen = true;
                this.hamburgerMenu.classList.add('active');
                this.mobileMenu.classList.add('active');
                this.menuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Add entrance animation delay for menu items
                this.mobileLinks.forEach((link, index) => {
                    link.style.animation = `slideInRight 0.3s ease forwards ${index * 0.1}s`;
                });
            }

            closeMenu() {
                if (!this.hamburgerMenu || !this.mobileMenu || !this.menuOverlay) return;
                
                this.isMenuOpen = false;
                this.hamburgerMenu.classList.remove('active');
                this.mobileMenu.classList.remove('active');
                this.menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
                
                // Remove animation
                this.mobileLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
        }

        // Add CSS animation for menu items entrance
        const styleNav = document.createElement('style');
        styleNav.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(30px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `;
        document.head.appendChild(styleNav);

        // Initialize the navigation when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new AnimatedHamburgerNav();
        });
    




function animateCountUp(element, end, suffix = "", decimals = 0) {
  const duration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(duration / frameDuration);

  let frame = 0;
  const countTo = typeof end === "string" ? parseFloat(end) : end;

  // Start the animation
  const counter = setInterval(() => {
    frame++;

    const progress = frame / totalFrames;
    const currentCount = countTo * progress;

    let formattedCount;
    if (decimals > 0) {
      formattedCount = currentCount.toFixed(decimals);
    } else {
      formattedCount = Math.floor(currentCount);
    }

    element.textContent = formattedCount + suffix;

    if (frame === totalFrames) {
      clearInterval(counter);
      element.textContent = countTo + suffix;
    }
  }, frameDuration);
}

function setupCountUpObserver() {
  const options = {
    root: null, // use viewport
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const targetValue = element.getAttribute("data-target");

        if (element.id === "traders-count") {
          animateCountUp(element, targetValue, "K");
        } else if (element.id === "market-cap") {
          animateCountUp(element, targetValue, "M", 1);
        }

        observer.unobserve(element);
      }
    });
  }, options);

  document.querySelectorAll(".stat-number").forEach((element) => {
    observer.observe(element);
  });
}

document.addEventListener("DOMContentLoaded", setupCountUpObserver);

// to toggle the nav



// for the date update

document.querySelector("#copyright-year").textContent =
  new Date().getFullYear();

new Swiper(".wrapper", {
  loop: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// invext pop
const countries = [
  "Italy",
  "Germany",
  "France",
  "Brazil",
  "Canada",
  "United States",
  "India",
  "South Africa",
  "Mexico",
  "Australia",
  "UK",
];

function showInvestmentPopup() {
  const popup = document.getElementById("investment-popup");
  const country = countries[Math.floor(Math.random() * countries.length)];
  const amount = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;

  popup.querySelector(".country").textContent = country;
  popup.querySelector(".amount").textContent = `$${amount.toLocaleString()}`;

  popup.classList.add("show");

  // Hide after 5 seconds
  setTimeout(() => {
    popup.classList.remove("show");
  }, 5000);

  // Schedule next popup randomly between 30s–40s
  const nextDelay = Math.floor(Math.random() * 10000) + 30000;
  setTimeout(showInvestmentPopup, nextDelay);
}

// Start first popup after 5 seconds
setTimeout(showInvestmentPopup, 5000);





// for my product effect

// Add smooth scroll behavior and interactive effects
document.querySelectorAll(".learn-more-btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    // Add a ripple effect
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255, 255, 255, 0.3)";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s linear";
    ripple.style.pointerEvents = "none";

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    // You can add your navigation logic here
    console.log(
      "Learn More clicked for:",
      this.closest(".service-card").querySelector(".service-title").textContent
    );
  });
});

// Add CSS for ripple animation
const style = document.createElement("style");
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            .learn-more-btn {
                position: relative;
                overflow: hidden;
            }
        `;
document.head.appendChild(style);

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Initialize scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `opacity 0.6s ease ${
      index * 0.1
    }s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });
});

// for about

     // Add smooth scroll animations
        const observerOptionsTwo = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observerTwo = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptionsTwo);

        // Initialize animations
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.info-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
                observerTwo.observe(card);
            });

            // Hero content animation
            const heroContent = document.querySelector('.hero-content');
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(20px)';
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observerTwo.observe(heroContent);
        });

//   stoke

       
