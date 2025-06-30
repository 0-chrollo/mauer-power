const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
//NavMenu
//NavMenu
//NavMenu
//NavMenu
//NavMenu

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const slideCount = slides.length;
    let slideInterval; // Declare interval variable

    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlides();
    }

    // Function to jump to a specific slide
    function goToSlide(index) {
        currentSlide = index;
        updateSlides();
    }

    // Function to update the active slide and indicator
    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    // Function to start or reset the automatic slide rotation
    function resetInterval() {
        clearInterval(slideInterval);
        // SLOWER slide transition interval
        slideInterval = setInterval(nextSlide, 7000); // <-- CHANGED from 5000
    }

    // Manual navigation with indicators
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
            resetInterval(); // Reset interval on manual click
        });
    });

    // Pause slideshow on hover for better UX
    const slideshowContainer = document.querySelector('.hero');
    slideshowContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slideshowContainer.addEventListener('mouseleave', () => resetInterval());

    // Initial setup for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Stop all automatic animations
        clearInterval(slideInterval);
    } else {
        // Start the slideshow
        resetInterval();
    }

    // Set the initial slide correctly on page load
    updateSlides();
});
